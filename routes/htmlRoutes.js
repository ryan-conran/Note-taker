const htmlExpress = require("express").Router();
const path = require("path");

// Get route  
htmlExpress.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname,  "../public/notes.html"));
});
htmlExpress.get("*", function(req, res) {
    res.sendFile(path.join(__dirname,  "../public/index.html"));
});

module.exports = htmlExpress;