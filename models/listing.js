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
                "https://imgs.search.brave.com/SeUfc9cBP9Mwyqca9vkjDXc0b6Bnn9IsYp7VtZjEe_M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xMi8xNC8yNC9u/aWdodC0zMDc4MzI2/XzEyODAuanBn",
            set: (v) =>
                v === ""
                    ? "https://imgs.search.brave.com/SeUfc9cBP9Mwyqca9vkjDXc0b6Bnn9IsYp7VtZjEe_M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xMi8xNC8yNC9u/aWdodC0zMDc4MzI2/XzEyODAuanBn"
                    : v,
        },
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
