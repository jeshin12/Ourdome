var express = require('express');
var router = express.Router();

const{homePage,Tour,rooms,about,contact}=require('../controller/userCotroller')
/* GET home page. */

router.get('/',homePage),

router.get('/360Tour',Tour)

router.get('/rooms',rooms)

router.get('/about',about)

router.get('/contact',contact)

// router.get('/', function(req, res, next) {
//   res.render('user/homePage');
// });

module.exports = router;
