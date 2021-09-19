const express = require("express");
const router = express.Router();
const authController = require('../controllers/AuthenticationController');

router.get('/', authController.isLoggedIn, (req, res) => {
    res.render('home.ejs');
});

router.get('/editor', authController.isLoggedIn, (req, res) => {
    res.render('editor.ejs');
});

router.post('/publish', authController.isLoggedIn, (req, res) => {
    res.redirect('/blog');
});

module.exports = router;