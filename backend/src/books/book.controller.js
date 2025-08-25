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

module.exports = {
    postABook
}