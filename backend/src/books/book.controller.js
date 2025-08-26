const Book = require("./book.model");

const postABook = async (req, res) => {
    // pass into database instead of just console

    try {
        const newBook = await Book({ ...req.body });
        await newBook.save();
        res.status(200).send({ message: "Book posted successfully", book: newBook })
    } catch (error) {

        console.error("Error creating book", error)
        res.status(500).send({ message: "failed to create a book" })
    }

}


const getAllBooks = async (req,res) => {
    try {
        const books = await Book.find().sort({createdAt:-1}); // -1 means descending order
        res.status(200).send(books)

    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).send({message:"Failed to fetch books"})
        
    }
}

module.exports = {
    postABook,
    getAllBooks
}