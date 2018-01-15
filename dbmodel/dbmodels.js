const mongoose = require('mongoose');


var schema = mongoose.Schema({name:String,age:Number,mobile:Number,group:String,address:String,img:String});


module.exports = mongoose.model('users',schema);
