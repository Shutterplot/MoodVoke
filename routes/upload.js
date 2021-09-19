const express = require("express");
const router = express.Router();
const authController = require('../controllers/AuthenticationController');

router.post('/', authController.isLoggedIn, (req, res) => {
    let file = req.files.image;
    let date = new Date();
    let imagename = date.getDate() + date.getTime() + file.name;
    let path = 'public/uploads/' + imagename;
    file.mv(path, (err, result) => {
        if(err){
            throw err;
        } else{
            res.json(`uploads/${imagename}`);
        }
    });
});

module.exports = router;