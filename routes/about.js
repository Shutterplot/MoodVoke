const express = require("express");
const router = express.Router();
const authController = require('../controllers/AuthenticationController');

router.get('/', authController.isLoggedIn, (req, res) => {
    res.render('about.ejs');
});

module.exports = router;