const models = require("../models/models");

const Student = models.Student;

async function getAllStudents(req, res) {
    try {
        const students = await Student.find({}, { _id: 0 });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: "Error!", error: error });
    }
}

async function getStudentById(req, res) {
    try {
        let id = req.params.id;
        let student = await Student.findOne({ id: id }, { _id: 0 });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: "Error!", error: error });
    }
}

module.exports = { getAllStudents, getStudentById };
