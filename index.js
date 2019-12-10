'use strict';

var app = require('express')();
//const cors = require('cors');
const bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));
//app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log("-------------------------------Request recieved!!!--------------------");
    console.log(req);
    console.log(res);
    next();
});

app.get('/hello', function (req, res) {
    res.json({ "hello": "hello" });
});
app.use(function (req, res, next) {
    res.status(404).json({ "reason": "No resource exist" });
});
var server = app.listen(app.get('port'), function () {
    console.log(`${server.address().address} :${server.address().port}`);
});
