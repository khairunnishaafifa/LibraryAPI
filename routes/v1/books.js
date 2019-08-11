var express = require('express');
var router = express.Router();

var booksCtrl = require('../../controllers/booksController')



//Create
router.post('/addbook', booksCtrl.addBook)


//Read
router.get('/', booksCtrl.getBook)
router.get('/author/:auth', booksCtrl.getBookByAuthor)
router.get('/id/:id', booksCtrl.getBookById)


//Update
router.put('/:id', booksCtrl.updateBook)

/*
    Update function for objects on ratings didn't work,
    and for date created it always post the day before the date.
*/

//Delete
router.delete('/author/:author', booksCtrl.deleteBookByAuthor)
router.delete('/:id', booksCtrl.deleteBookById)



module.exports = router