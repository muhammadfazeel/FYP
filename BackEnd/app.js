const express = require('express');
const app=express();
const bodyparser=require('body-parser');
const mongoose=require('mongoose');

const userRoutes=require('./Api/routes/user');
const hospitalroutes=require("./Api/routes/create-hospital");

mongoose.connect(
    "mongodb+srv://fazeel:"+process.env.MONGO_ATLAS_PW+"@cluster0-xn8om.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true
    }
).then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });
mongoose.Promise=global.Promise;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use("/user",userRoutes);
app.use("/create-hospital",hospitalroutes);

module.exports=app;