const express = require("express");
const router = express.Router({mergeParams : true});
const Review = require("../models/reviews.js"); 
const { reviewSchema}=require("../utils/schema.js")
const Listing = require("../models/listing.js"); 
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {isLoggedIn,isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/review.js");
// validate review
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};


// reviews
//post review route
router.post("/",
  validateReview,
  wrapAsync(reviewController.CreateReview));

//delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;