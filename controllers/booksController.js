var mongoose = require('mongoose')
var book = require('../models/book')

var { successResponse, errorResponse } = require('../helpers/response')



exports.addBook = (req, res) => {
    console.log(req.body)
    var id = new mongoose.Types.ObjectId()
    var title = req.body.title
    var summary = req.body.summary
    var isbn = req.body.isbn
    var author = req.body.author
    var comment = req.body.comment
    var numberOfStars = req.body.numberOfStars
    var created = req.body.created

    var book1 = new book({
        _id: id,
        title: title,
        summary: summary,
        isbn: isbn,
        author: author,
        ratings: [
            {
                comment: comment,
                numberOfStars: numberOfStars
            }
        ],
        created: created
    })

    book1.save(function (err) {
        if (err) throw err

        res.json(
            successResponse('Book successfully saved', book1)
        )
    })
}



exports.getBook = (req, res) => {

    book.find().exec()
        .then((books) => {
            res.json(
                successResponse('Book found', books)
            )
        })
        .catch((err) => {
            res.json(
                errorResponse('Book not found', err, books)
            )
        })
}



exports.getBookByAuthor = (req, res) => {
    var auth = req.params.auth

    book.find({
        author: auth
    }).sort('-created')
        .limit(3)
        .exec(function (err, books) {
            if (err) throw err

            
            res.json(
                successResponse('Book found', books)
            )
            console.log(books)
        })
}



exports.getBookById = (req, res) => {
    var id = req.params.id

    book.findById(id, function (err, books) {
        if (err) throw err
        
        res.json(
            successResponse('Book found', books)
        )
        console.log(books)
    })
}



exports.updateBook = (req, res) => {

    book.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, function (err, books) {
        if (err) throw err

        res.json(
            successResponse('Book updated successfully', books)
        )
        console.log(books)
    }
    )
}



exports.deleteBookByAuthor = (req, res) => {
    var author = req.params.author

    book.deleteOne({
        author: author
    }).exec(function (err, books) {
        if (err) throw err

        res.json(
            successResponse('Book deleted successfully', books)
        )
        console.log("Book deleted successfully")
    })
}



exports.deleteBookById = (req, res) => {

    book.findByIdAndDelete(req.params.id, req.body, function (err, books) {
        if (err) throw err

        res.json(
            successResponse('Book deleted successfully', books)
        )
        console.log("Book deleted successfully")
    })
}  