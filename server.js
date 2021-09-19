const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const fileupload = require('express-fileupload');
const mongoose = require('mongoose');
const app = express();
const passportConfig = require('./passportConfig');
require('dotenv').config()
const authController = require('./controllers/AuthenticationController');
const passport = authController.passport;

// DATABASE
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Database connection established.");
});

// MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(fileupload());
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser(process.env.SECRET));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

app.set('view-engine', 'ejs');

// ROUTES
require('./routes/routes')(app);

app.listen(3000);