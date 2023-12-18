const express = require('express')
const mongoose = require('mongoose')

// Create an Express application
const app = express()

// Connect to MongoDB
mongoose.connect('mongodb://localhost/medical_records', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

  // Define the Patient schema start
const patientSchema = new mongoose.Schema({
    patientId: { type: String, required: true },
    surname: { type: String, required: true },
    otherNames: { type: String, required: true },
    gender: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    emergencyName: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    relationship: { type: String, required: true },
  });
   // Define the Patient schema ends