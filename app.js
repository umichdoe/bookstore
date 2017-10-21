const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Genre = require('./models/genre');
const Book = require('./models/book');

app.use(bodyParser.json());

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

// Add a genre
app.post('/api/genres', function(req, res) {
  var genre = req.body;
  Genre.addGenre(genre, function(err, genre) {
    if(err){
      throw err;
    }
    res.json(genre);
  });
})

// Update a genre
app.put('/api/genres/:_id', function(req, res) {
  var id = req.params._id;
  var genre = req.body;
  Genre.updateGenre(id, genre, {}, function(err, genre) {
    if(err){
      throw err;
    }
    res.json(genre);
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

// Post add a book
app.post('/api/books', function(req, res) {
  var book = req.body;
  Book.addBook(book, function(err, book) {
    if(err){
      throw err;
    }
    res.json(book);
  })
})

//Get book by Id 36:27
app.get('/api/books/:_id', function(req, res) {
  Book.getBookById(req.params._id, function(err, book) {
    if(err){
      throw err;
    }
    res.json(book);
  });
})

// Update a book
app.put('/api/books/:_id', function(req, res) {
  var id = req.params._id;
  var book = req.body;
  Book.updateBook(id, book, {}, function(err, book) {
    if(err){
      throw err;
    }
    res.json(book);
  });
})



var port = process.env.PORT || 3456;

app.listen(port, function() {
  console.log(`Running on port ${port}`);
})
