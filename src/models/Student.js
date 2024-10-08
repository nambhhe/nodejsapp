const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    borrowed_books: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Book",
        },
    ],
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
