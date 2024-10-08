const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: Number, required: true },
    isbn: { type: String, required: true, unique: true },
    borrowed_by: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Student",
        },
    ],
});

const Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
