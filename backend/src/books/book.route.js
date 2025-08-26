const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks } = require('./book.controller');
const router = express.Router();


// frontend => backend server => controller => schema => database => communicate with the server => back to frontend
// post = when you want to submit something from frontend to db
// get = when you get something back from db 
// put/patch = when you edit or update data 
// delete = when you want to delete a data

// post a book
router.post("/create-book", postABook)

// get all books from the current database
router.get("/", getAllBooks)

module.exports = router;