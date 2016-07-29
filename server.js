var express = require('express');
var app = express();
var path = require('path');
var moment = require('moment');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/', '/index.html'));
});

app.get('/:time', function(req, res) {
    var date = req.param('time');
    if (moment(date).isValid) {
    res.send({natural: moment(date).format('MMMM Do YYYY'), unix: moment(date).unix()})}
    else if (moment(date).isValid==false) {
        res.send({natural: null, unix: null});
    }
}); 

app.listen(8080, function() {
    console.log('Let us timestamp app!');
});

/*

https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters

*/