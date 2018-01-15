const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var user = require('../dbmodel/dbmodels');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());





router.get('/',function(req,res,next){
  res.render('register');
});

router.post('/',function(req,res,next){
  let user1 = new user();
  user1.name = req.body.name;
  user1.age = req.body.age;
  user1.mobile = req.body.contact;
  user1.group = req.body.group;
  user1.address = req.body.address;
  user1.img = req.body.img;
  user1.save(function(err){
    if(err){
      console.log(err);
    }else {
      console.log('user saved');
      res.redirect('/');
    }
  });
});



module.exports = router;
