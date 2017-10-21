const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connect to Mongoose
mongoose.connect('mongodb://localhost/fakeBookstore', { useMongoClient: true });
var db = mongoose.connection

app.get('/', function(req, res) {
  res.send('please use /api/books or /api/genres');
})


var port = process.env.PORT || 3456;

app.listen(port, function() {
  console.log(`Running on port ${port}`);
})
