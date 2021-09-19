const express = require("express");
const router = express.Router();
const authController = require('../controllers/AuthenticationController');
const User = require('../models/User');

router.get('/', authController.isLoggedIn, (req, res) => {
    res.render('home.ejs', {
        name: req.user.name,
        moods: req.user.moods
    });
});

router.post('/', authController.isLoggedIn, (req, res) => {
    User.findOne({
        email: req.user.email
    }, function (err, user) {
        user.moods.set(req.body['submit-day'], req.body.mood);
        user.save(function (err) {
            if (err) {
                console.log('something went wrong')
            }
        });
        res.redirect('/');
    });
});

module.exports = router;