const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Mongoose schema for your collection
const yourSchema = new mongoose.Schema({
  // Define your schema fields here
  // For example:
  name: String,
  age: Number,
});

// Create a Mongoose model based on the schema
const YourModel = mongoose.model('YourModel', yourSchema);

// Define a route to get data from MongoDB
app.get('/getData', async (req, res) => {
  try {
    // Use the Mongoose model to find data in the collection
    const data = await YourModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
