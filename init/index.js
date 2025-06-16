require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");  // contains data to be inserted
const Listing = require("../models/listing.js"); // fixed path

// Connect to DB
const mongoUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}

// Initialize database
const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj,owner :"684ec0c585c804de4edaa8eb" }))
  await Listing.insertMany(initData.data);  
  console.log("Data was initialized");
};

initDB();
