const models = require("../models/models");

const Book = models.Book;

async function getAllBooks(req, res) {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Error!", error: error });
    }
}

async function getBookById(req, res) {
    try {
        let id = req.params.id;
        let book = await Book.findOne({ id: id });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "Error!", error: error });
    }
}

module.exports = { getAllBooks, getBookById };
