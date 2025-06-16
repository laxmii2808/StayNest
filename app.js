if(process.env.NODE_ENV !="production")
{
  require('dotenv').config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path=require("path");
const ejsMate = require('ejs-mate');
const { nextTick } = require("process");
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const methodOverride= require("method-override");
const passport= require("passport");
const listingRoutes = require("./routes/listing.js");
const userRoutes = require('./routes/user.js');
const reviewRoutes = require("./routes/review.js");
const User = require('./models/user.js');
const LocalStrategy = require("passport-local");

const dbUrl = process.env.ATLASDB_URL;
// Connect to MongoDB
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(dbUrl);
}
//view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
    secret: process.env.SECRET,
   },
   touchAfter : 24 * 60 * 60
 });

store.on("error", () =>{
  console.log("ERROR IN MONGO SESSION STORE",err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires:Date.now()+ 1000*60*60*24*7,
      maxAge: 1000*60*60*24*7,
      httpOnly: true,

    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// Routes
app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);
app.use("/",userRoutes);

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Something went wrong!";
  res.status(statusCode).render("listings/error", { err });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
