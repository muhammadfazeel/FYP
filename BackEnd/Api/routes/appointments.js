const express = require('express');
const router=express.Router();

const checkauth=require('../middleware/check-auth');
const appointmentController=require("../controllers/appointments");
//To Get All Appointments
router.get('/getappontment',checkauth,appointmentController.getallAppointment);
//To Delete Appointment
router.delete('/deleteAppointment',checkauth,appointmentController.deleteAppointment);
//To Add New Appointment
router.post('/addAppointment',checkauth,appointmentController.addAppointment);


module.exports=router;