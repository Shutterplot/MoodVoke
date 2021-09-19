const express = require("express");
const router = express.Router();
const authController = require('../controllers/AuthenticationController');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const passport = authController.passport;

router.get('/', authController.isLoggedOut, (req, res) => {
    res.render('signlog.ejs');
})

router.post('/register', authController.isLoggedOut, (req, res) => {
    User.findOne({email: req.body.email}, async (err, doc) => {
        if (err) throw err;
        if (doc)  {
            console.log("User already exists.");
            res.redirect('/login');
        } else {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, 10)
            });
            await user.save();
            res.redirect('/');
        }
    });
});

router.post('/authenticate', authController.isLoggedOut, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err;
        if (!user) {
            console.log("Incorrect Password");
            res.redirect('/login');
        } else {
            req.login(user, err => {
                if (err) throw err;
                console.log("logged in");
                res.redirect('/');
            });
        }
    })(req, res, next);
});

module.exports = router;