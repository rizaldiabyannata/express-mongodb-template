const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/test";

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected to", url);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
