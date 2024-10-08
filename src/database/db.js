const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL, { dbName: process.env.DB_NAME });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Connection to MongoDB failed:", error);
    }
}

module.exports = { connectDB };
