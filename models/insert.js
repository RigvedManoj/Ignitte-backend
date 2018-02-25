var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post("/signup", function(req, res) {

	console.log(req.body);
    var data= {
        name: req.body.name,
        password:req.body.password,
        email:req.body.email,
        phone:req.body.phone,
    };
    //mysql connection setup
    var connection = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "",
        database : "mydb",
        multipleStatements: true
    });

    var query = connection.query('INSERT INTO students SET ?', data, function(err, res) {
        if (err) {
            console.log(err);
        } else {
         console.log('success');    
        }
    });
});

//console.log(res); 
app.listen(3000, function () {
    'use strict';
})
