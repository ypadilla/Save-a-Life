//controller for the landing page
var models  = require('../models');
var express = require('express');

var router  = express.Router();


router.get('/', function(req, res) {
  // res.render('./attendance/attendances');
  // console.log(req.session.logged_in)
  

     return res.render('./landing/landings', {
        logged_in: req.session.logged_in,
        email: req.session.username
        
    })
});

module.exports = router;