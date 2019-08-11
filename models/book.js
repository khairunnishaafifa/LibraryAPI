var mongoose = require('mongoose');

var schema = mongoose.Schema

var bookSchema = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    summary: String,
    isbn: Number,
    author: String,
    ratings: [
        {
            comment: String,
            numberOfStars: Number,
        }
    ],
    created: {
        type: Date,
        default: Date.now
    }
},
{
    collection: 'books'
});

var book = mongoose.model('book', bookSchema)

module.exports = book