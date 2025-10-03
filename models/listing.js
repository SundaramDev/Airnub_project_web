const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    // image: {
    //     type: String,
    //     default:"https://unsplash.com/photos/turbulent-ocean-water-swirls-and-crashes-beautifully-XD5oKCerKCQ",
    //     set: (v) =>
    //         v === ""
    //             ? "https://unsplash.com/photos/turbulent-ocean-water-swirls-and-crashes-beautifully-XD5oKCerKCQ"
    //             : v,
    // }, image: {
    filename: {
        type: String,
        default: "listingimage",
    },
    url: {
        type: String,
        default:
            "https://unsplash.com/photos/turbulent-ocean-water-swirls-and-crashes-beautifully-XD5oKCerKCQ",
        set: (v) =>
            v === ""
                ? "https://unsplash.com/photos/turbulent-ocean-water-swirls-and-crashes-beautifully-XD5oKCerKCQ"
                : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
