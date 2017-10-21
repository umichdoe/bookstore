const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Genre = require('./models/genre');
const Book = require('./models/book');

//connect to Mongoose
mongoose.connect('mongodb://localhost/fakebookstore', { useMongoClient: true });
var db = mongoose.connection

app.get('/', function(req, res) {
  res.send('please use /api/books or /api/genres');
})

// GET all genres
app.get('/api/genres', function(req, res) {
  Genre.getGenres(function(err, genres) {
    if(err){
      throw err;
    }
    res.json(genres);
  });
})

// Get all books
app.get('/api/books', function(req, res) {
  Book.getBooks(function(err, books) {
    if(err){
      throw err;
    }
    res.json(books);
  });
})

//Get book by Id 36:27
app.get('/api/books/:id', function(req, res) {
  Book.getBooks(function(err, books) {
    if(err){
      throw err;
    }
    res.json(books);
  });
})


var port = process.env.PORT || 3456;

app.listen(port, function() {
  console.log(`Running on port ${port}`);
})
