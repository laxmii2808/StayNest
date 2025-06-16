const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middlewares.js");
const reviewController = require("../controllers/reviews.js"); // Ensure this matches your actual file name

// POST: Create a review
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.CreateReview)
);

// DELETE: Remove a review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
