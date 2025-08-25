const express = require('express');
const Book = require('./book.model');
const { postABook } = require('./book.controller');
const router = express.Router();


// post = when you want to submit something from frontend to db
// get = when you get something back from db 
// put/patch = when you edit or update data 
// delete = when you want to delete a data

// post a book
router.post("/create-book", postABook)


// get all books


module.exports = router;