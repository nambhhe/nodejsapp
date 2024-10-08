const express = require("express");
const Mongoose = require("mongoose");
const { connectDB } = require("./src/database/db");
const controllers = require("./src/controllers/controllers");
require("dotenv").config();

const app = express();
app.use(express.json());

const studentController = controllers.studentController;
const bookController = controllers.bookController;

app.get("/students", studentController.getAllStudents);
app.get("/student/:id", studentController.getStudentById);
app.get("/books", bookController.getAllBooks);

const PORT = process.env.PORT;
app.listen(PORT, "localhost", async () => {
    console.log(`Server is running on port: ${PORT}`);
    await connectDB();
});
