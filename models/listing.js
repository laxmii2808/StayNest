const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
    url: String,
    filename: String
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String
    },
    country: {
        type: String
    },
    reviews:[
       {
            type:Schema.Types.ObjectId,
            ref:"Review",
       },
    ],
    owner:{
    
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    category: {
    type: String,
    enum: [
        "Trending", "Rooms", "Iconic cities", "Amazing pool", "Farms", "Gym", "City",
        "Historic", "Countryside", "Beach", "Mountain", "Mountains", "Camping",
        "Luxury", "Winter", "Nature", "Lake", "Forest", "Houseboat", "Studio",
        "Palace", "Resort", "Retreat", "Hotel", "Villa", "Chalet", "Apartment"
    ],
    required: true
  },
});
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
