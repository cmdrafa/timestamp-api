// JavaScript File
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var moment = require('moment');
var bodyParser = require('body-parser');

app.listen(port, function(){
    console.log("Node.js running on port: " + port)
})


app.get('/:query', function(req, res){
    var passedDate = req.params.query;
    var unix;
    var natural;
    if(isNaN(passedDate) && moment(passedDate).isValid()){
        unix = moment(passedDate).format("X");
        natural = moment(passedDate).format("MMMM D, YYYY")
        console.log("Invalid date " + passedDate)
    }
    else{
        unix = passedDate
        natural = moment.unix(passedDate).format("MMMM D, YYYY")
        console.log(natural)
    }
    var timeSentObj = {"unix": unix, "natural": natural}
    res.send(timeSentObj)
})
