  const Listing = require("./models/listing.js");
  const Review = require("./models/reviews.js");
  module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl=req.originalUrl;
    req.flash("error", "You must be signed in first!");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req,res,next) =>{
  if(req.session.redirectUrl) {
    res.locals.redirectUrl=req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async(req,res,next)=>{
    const { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currentUser._id)){
      req.flash("error","You don't have permision to edit");
      return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  const review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currentUser._id)) {
    req.flash("error", "You don't have permission to delete this review.");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

