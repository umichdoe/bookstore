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
