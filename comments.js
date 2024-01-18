// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var file = 'comments.json';
var port = process.env.PORT || 8080;

// Use body-parser to parse the JSON body of the POST request
app.use(bodyParser.json());

// Use body-parser to parse the JSON body of the PUT request
app.use(bodyParser.urlencoded({extended: true}));

// Use body-parser to parse the JSON body of the DELETE request
app.use(bodyParser.urlencoded({extended: true}));

// Use body-parser to parse the JSON body of the GET request
app.use(bodyParser.urlencoded({extended: true}));

// GET request to return all comments
app.get('/comments', function(req, res) {
  fs.readFile(file, function(err, data) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(data);
    }
  });
});