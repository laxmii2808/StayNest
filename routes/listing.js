const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js"); 
const {listingSchema}=require("../utils/schema.js")
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const { isLoggedIn,isOwner } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


//validate listing
const ValidateListing=(req,res,next) =>{
    let {error}=listingSchema.validate(req.body);
    if (error) {
      let errMsg = error.details.map((el)=>el.message).join(",");
      throw new ExpressError(400,errMsg);
    }
   else{
     next();
   }
};

router.route("/")
//index route
  .get(wrapAsync(listingController.index))
  //create route
  .post(
    isLoggedIn,
    upload.single("image"),
    (req, res, next) => {
      // manually attach image info to req.body.listing before Joi validation
      if (!req.body.listing) req.body.listing = {};
      if (req.file) {
        req.body.listing.image = {
          url: req.file.path,
          filename: req.file.filename
        };
      }
      next();
    },
  ValidateListing,
  wrapAsync(listingController.createListing)
);

//new route
router.get("/new",isLoggedIn,(req,res)=>{
  res.render("listings/new");
});

router.route("/:id")
// show route
  .get(wrapAsync(listingController.showListing))
  //to update the given listing
  .post(
  isLoggedIn,
  upload.single("image"),
    (req, res, next) => {
    if (!req.body.listing) req.body.listing = {};
    if (req.file) {
      req.body.listing.image = {
        url: req.file.path,
        filename: req.file.filename
      };
    }
    next();
  },
  ValidateListing,
  wrapAsync(listingController.createListing)
  )
  .put(
    isLoggedIn,
    isOwner,
    upload.single("image"),
    (req, res, next) => {
      if (!req.body.listing) req.body.listing = {};
      if (req.file) {
        req.body.listing.image = {
          url: req.file.path,
          filename: req.file.filename
        };
      }
      next();
    },
    ValidateListing,
    wrapAsync(listingController.updateListing)
  )
  //to delete a route
  .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroy));

// for edit route
router.get("/:id/edit",isLoggedIn,isOwner,
  wrapAsync(listingController.renderEditForm));
module.exports = router;
