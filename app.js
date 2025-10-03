const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";  // test/wanderlust nahi, ek hi DB naam hota hai

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.listen(3000, () => {
    console.log("Server listening to port 3000");
});
