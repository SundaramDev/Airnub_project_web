const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn,isReviewAuthor } = require("../middleware.js");

// Post review
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res) => {
    const { id } = req.params; // listing id from parent route
    const listing = await Listing.findById(id);
    if (!listing) throw new ExpressError(404, "Listing not found!");

    const newReview = new Review(req.body.review);
    newReview.author = req.user._id; // Correctly assign author
    await newReview.save();

    listing.reviews.push(newReview);
    await listing.save();

    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
  })
);

// Delete review
router.delete(
  "/:reviewId",
  isLoggedIn, // ensure user is logged in
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;

    const review = await Review.findById(reviewId);
    if (!review) {
      req.flash("error", "Review not found!");
      return res.redirect(`/listings/${id}`);
    }

    // Only author can delete
    if (!review.author.equals(req.user._id)) {
      req.flash("error", "You don't have permission to delete this review!");
      return res.redirect(`/listings/${id}`);
    }

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
