const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Genre = mongoose.model('Genre', GenreSchema);
module.exports = Genre;

// get Genres
module.exports.getGenres = function(callback, limit) {
  Genre.find(callback).limit(limit);
}

// add Genre
module.exports.addGenre = function(genre, callback) {
  Genre.create(genre, callback);
}

// update Genre
module.exports.updateGenre = function(id, genre, options, callback) {
  var query = {_id: id};
  var update = {
    name: genre.name
  }
  Genre.findOneAndUpdate(query, update, options, callback);
}

// delete genre
module.exports.deleteGenre = function(id, callback) {
  var query = {_id: id};
  Genre.remove(query, callback);
}
