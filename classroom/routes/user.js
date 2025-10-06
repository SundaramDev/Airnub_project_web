const express = require("express");
const router = express.Router();

// Users Routes
// Index - users
router.get("/", (req, res) => {
    res.send("GET for users");
});

// Show - user
router.get("/:id", (req, res) => {
    res.send("GET for user id");
});

// Create - user
router.post("/", (req, res) => {
    res.send("POST for users");
});

// Delete - user
router.delete("/:id", (req, res) => {
    res.send("DELETE for user id");
});

module.exports = router;
