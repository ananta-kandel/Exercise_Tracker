const mongoose = require("mongoose");
require('dotenv').config()
const MONGODB_URI = process.env.URI;

async function connectToMongoDB() {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully!');
    // Don't forget to close the connection when you're done with it
    // mongoose.connection.close();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Export this 
module.exports = connectToMongoDB;





