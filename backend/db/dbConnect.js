const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  if (!process.env.DB_URL) {
    throw new Error("Missing DB_URL environment variable.");
  }

  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Successfully connected to MongoDB Atlas!");
  } catch (error) {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
    throw error;
  }
}

module.exports = dbConnect;
