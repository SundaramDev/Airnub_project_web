const Listing = require("../models/listing");
const Review = require("../models/review");
const ExpressError = require("../utils/ExpressError.js");

module.exports.createReview = async (req, res) => {
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
};

module.exports.destroyReview = async (req, res) => {
    const { id, reviewId } = req.params;

    const review = await Review.findById(reviewId);
    if (!review) {
      req.flash("error", "Review not found!");
      return res.redirect(`/listings/${id}`);
    }

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};
