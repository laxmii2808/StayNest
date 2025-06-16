const mongoose = require("mongoose");
const initData = require("./data.js");  // contains data to be inserted
const Listing = require("../models/listing.js"); // fixed path

// Connect to DB
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Wanderer');
}

// Initialize database
const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj,owner :"684ec0c585c804de4edaa8eb" }))
  await Listing.insertMany(initData.data);  
  console.log("Data was initialized");
};

initDB();
