const mongoose = require("mongoose");

const patientSchema = mongoose.model(
  "Patient",
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    }
  })
);
exports.Patient = patientSchema;
