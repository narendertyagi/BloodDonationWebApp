const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var user = require('../dbmodel/dbmodels');


router.get('/:id',function(req,res,next){
  var group = {group:req.params.id}
  user.find(group,function(err,result){
    if(err){
      console.log(err);
    }else {

      res.render('users',{rs:result});
    }
  });
});

router.get('/edit/:id',function(req,res,next){
  var query = {_id:req.params.id}
  user.findOne(query,function(err,result){
    if(err){
      console.log(err);
    }else {
      res.render('edit',{rs:result});
    }
  });
});






module.exports = router;
