const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(async () => {
        console.log("Connected to DB");
        await initDB();
    })
    .catch((err) => {
        console.log(err);
    });

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "68e42e37209fba6446a912c2" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

async function main() {
    await mongoose.connect(MONGO_URL);
}
