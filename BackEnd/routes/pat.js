const express = require("express");
const Patient = require("../Models/patient");

const router = express.Router();

router.get("/", async (req, res) => {
  const patient = await Patient.find();
  res.send(patient);
});

router.post("/", (req, res) => {
  const patient = new Patient({
    name: req.body.name,
    gender: req.body.gender
  });
  patient.save();
  res.send(patient);
});
router.put("", async () => {});
router.delete("", async () => {});
router.get("", async () => {});
