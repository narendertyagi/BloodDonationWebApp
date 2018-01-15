const express = require('express');
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/blood');
var db = mongoose.connection;


db.on('errors',function(er){
  console.log(er);
});

db.once('open',function(){
  console.log('Database Connected');
});




var user = require('./dbmodel/dbmodels');








var app = express();

app.listen(8888,function(err){
  if(err){
    console.log(err);
  }else {
    console.log('Server started successfully...');
  }
});


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

var home = require('./routes/home');
var register = require('./routes/register');
var users = require('./routes/users');







app.use('/',home);
app.use('/register',register);
app.use('/users',users);
