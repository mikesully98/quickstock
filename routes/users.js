var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db=require('../database');


// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/user-list', function(req, res, next) {

    db.conn.connect(function(err) {
        if(err)throw err;
    });

    var sql='SELECT * FROM tvmodels';
    db.conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});






module.exports = router;