const Listing = require("../models/listing");

module.exports.index = async (req, res, next) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index", { allListings });
    } catch (err) {
        next(err);
    }
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res, next) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id)
            .populate({
                path: "reviews",
                populate: { path: "author" }
            })
            .populate("owner");

        if (!listing) {
            req.flash("error", "Listing you requested does not exist!");
            return res.redirect("/listings");
        }

        res.render("listings/show.ejs", { listing, currUser: req.user });
    } catch (err) {
        next(err);
    }
};

module.exports.createListing = async (req, res, next) => {
    try {
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;

        // Handle uploaded file (if using multer)
        if (req.file) {
            newListing.image = {
                url: req.file.path,
                filename: req.file.filename
            };
        }

        await newListing.save();
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
    } catch (err) {
        next(err);
    }
};

module.exports.renderEditForm = async (req, res, next) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);

        if (!listing) {
            req.flash("error", "Listing you requested does not exist!");
            return res.redirect("/listings");
        }

        res.render("listings/edit.ejs", { listing });
    } catch (err) {
        next(err);
    }
};

module.exports.updateListing = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedData = { ...req.body.listing };

        // Handle new uploaded file
        if (req.file) {
            updatedData.image = {
                url: req.file.path,
                filename: req.file.filename
            };
        }

        await Listing.findByIdAndUpdate(id, updatedData, { new: true });
        req.flash("success", "Listing Updated!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        next(err);
    }
};

module.exports.destroyListing = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedListing = await Listing.findByIdAndDelete(id);
        if (deletedListing) {
            req.flash("success", "Listing Deleted!");
        } else {
            req.flash("error", "Listing not found!");
        }
        res.redirect("/listings");
    } catch (err) {
        next(err);
    }
};
