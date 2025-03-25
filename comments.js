// Create web server using express
// This file sets up the application routes and exports the function to be used in app.js
const express = require('express');
const router = express.Router();

// Define a sample route
router.get('/', (req, res) => {
    res.send('Welcome to the Express Web Server!');
});

// Additional routes can be defined here

module.exports = (app) => {
    app.use('/', router);
};