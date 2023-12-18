const express = require('express')
const mongoose = require('mongoose')

// Create an Express application
const app = express()

// Connect to MongoDB
mongoose.connect('mongodb://localhost/medical_records', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
