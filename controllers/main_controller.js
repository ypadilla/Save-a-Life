//Main controller which allows users to create chats and creates a relationship in the database
var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function(req, res) {


  models.Chat.findAll({
    include: [ models.User ]
  })
  
  .then(function(chats) {
    

    res.render('main/index', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      chats: chats
    })
  })
});

router.post('/create', function (req, res) {
  

  models.Chat.create({
    name: req.body.name,
    active: req.body.active,
    user_id: req.session.user_id
  })
  
  .then(function() {
    res.redirect('/');
  })
});

router.put('/update/:id', function(req,res) {

  models.Chat.update(
  {
    active: req.body.active
  },
  {
    where: { id : req.params.id }
  })
  // connect it to this .then.
  .then(function (result) {
    res.redirect('/');
  })
});


router.delete('/delete/:id', function(req,res) {

  models.Chat.destroy({
    where: {
      id: req.params.id
    }
  })

  .then(function() {
    res.redirect('/');
  })
});


module.exports = router;
