const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

// Root route
app.get("/", (req, res) => {
    res.send("This is root");
});

// Users routes
app.use("/users", users);

// Posts routes
app.use("/posts", posts);

// Start server
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
