const express = require('express');
const mongoose = require('mongoose');
var user = require('../dbmodel/dbmodels');

var router = express.Router();





router.get('/',function(req,res,next){
  res.render('index');
});

/*
*/

module.exports = router;
