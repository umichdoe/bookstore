const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String
  },
  pages: {
    type: String
  },
  image_url: {
    type: String
  },
  buy_url: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  },
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;

// get Books
module.exports.getBooks = function(callback, limit) {
  Book.find(callback).limit(limit);
}

// get Book by Id
module.exports.getBookById = function(id, callback) {
  Book.findById(id, callback);
}

// post add a book
module.exports.addBook = function(book, callback) {
  Book.create(book, callback);
}
