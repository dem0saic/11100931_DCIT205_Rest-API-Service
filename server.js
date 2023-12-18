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
    patientId: { type: String, 
    required: true },
    surname: { type: String, 
    required: true },
    otherNames: { type: String, 
    required: true },
    gender: { type: String, 
    required: true },
    phoneNumber: { type: String, 
    required: true },
    address: { type: String, 
    required: true },
    emergencyName: { type: String, 
    required: true },
    emergencyContact: { type: String, 
    required: true },
    relationship: { type: String, 
    required: true },
  });
   // Define the Patient schema ends

   // Create the Patient model
const Patient = mongoose.model('Patient', patientSchema);

// API routes

// Register a new patient
app.post('/patients', (req, res) => {
    const {
      patientId,
      surname,
      otherNames,
      gender,
      phoneNumber,
      address,
      emergencyName,
      emergencyContact,
      relationship,
    } = req.body;
  
    const newPatient = new Patient({
      patientId,
      surname,
      otherNames,
      gender,
      phoneNumber,
      address,
      emergencyName,
      emergencyContact,
      relationship,
   });

   newPatient.save()
    .then(() => {
      res.status(201).json({ message: 'Patient registered successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to register patient' });
    });
});

// Get details of a specific patient
app.get('/patients/:patientId', (req, res) => {
  const { patientId } = req.params;

  Patient.findOne({ patientId })
    .then((patient) => {
      if (patient) {
        res.status(200).json(patient);
      } else {
        res.status(404).json({ message: 'Patient not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to get patient details' });
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});