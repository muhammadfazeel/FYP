const helmet = require('helmet');
const express = require('express');
const app=express();
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const path = require('path');
//var express_layout = require('express-ejs-layouts');

const userRoutes=require('./Api/routes/user');
const hospitalroutes=require("./Api/routes/create-hospital");
const superadminroutes=require("./Api/routes/superadmin");
const doctorroutes=require("./Api/routes/doctor");
const appointmentRoutes = require('./Api/routes/appointments');
const patientRoutes = require("./Api/routes/patient");

mongoose.connect(
    "mongodb://localhost/HMS",{ useNewUrlParser: true, useCreateIndex: true }
).then(() => {
    console.log("Connected to Database");
    })
    .catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });
mongoose.Promise=global.Promise;

//app.use(express_layout);
app.set('views',path.join( __dirname +'/views'));
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));



app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(helmet());

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/index',(req,res)=>{
    res.render('index');
})
app.get('/login',(req,res)=>{
    res.render('login');
});
app.get('/form',(req,res)=>{
    res.render('form');
});

app.use("/user",userRoutes);
app.use("/create-hospital",hospitalroutes);
app.use("/superadmin",superadminroutes);
app.use("/doctor",doctorroutes);
app.use("/appointment",appointmentRoutes);
app.use("/patient",patientRoutes);


module.exports=app;