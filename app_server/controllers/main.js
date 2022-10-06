var express = require('express');
var router = express.Router();


module.exports.index= function(req, res, next) { //anasayfayı kontrol eden fonksiyon
 res.render('index', { title: 'Express' });
}