//controller for the main application
var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.redirect('/main');
});

module.exports = router;


