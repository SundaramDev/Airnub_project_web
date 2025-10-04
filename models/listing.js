const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "listingimage",
        },
        url: {
            type: String,
            default:
                "C:/Users/gamin/OneDrive/Desktop/first.jpg",
            set: (v) =>
                v === ""
                    ? "C:/Users/gamin/OneDrive/Desktop/first.jpg"
                    : v,
        },
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
