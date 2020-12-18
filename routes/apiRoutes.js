// Make backend API routes
const apiExpress = require("express").Router();

// Get route  
apiExpress.get("/api/notes", function(req, res) {
    res.json("Hello");
});

module.exports = apiExpress;