const express = require('express');
const router=express.Router();

const checkAuth=require('../middleware/check-auth');
const patientcontroller=require('../controllers/patient');

//**********Create Patient0***********//
router.post("/enter-patient",checkAuth,patientcontroller.getPatient);

module.exports=router;