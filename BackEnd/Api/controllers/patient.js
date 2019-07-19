const mongoose=require('mongoose');
const bcrpt=require('bcrypt');
const jwt=require('jsonwebtoken');

const Userdata = require("../Models/user");
const Patient = require('../Models/patient');

exports.getPatient=(req,res,next)=>{
    Userdata.find({
        email:req.body.email
    }).exec()
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({
                message:'Email Already Exists'
            });
        }
            else{
                
                bcrpt.hash(req.body.password,10,(err,hash)=>{
                    if(err){
                        return res.status(500).json({
                            error: err
                        });
                    }
                        else{
                            
                            const patient=new Patient ({
                                hid:req.userData.hospitalid,
                                name:req.body.name,
                                email:req.body.email,
                                password:hash,
                                gender:req.body.gender,
                                blood:req.body.gender,
                                age:req.body.age,
                                address:req.body.address,
                                phone:req.body.phone,
                                role:"patient"
                                
                            });
                            
                            patient.save()
                            .then(result=>
                                {
                                console.log(result);
                                
                                res.status(201).json({
                                
                                message:'Patient Created'
                                
                            });
                                const User= new Userdata
                                ({
                                    hid:req.userData.hospitalid,
                                    name:req.body.name,
                                    email:req.body.email,
                                    password:hash,
                                    phone:req.body.phone,
                                    role:"patient"
                                });
                                User.save()
                                .then()
                                .catch(err=>{
                                    console.log(err);
                                })
                            })
                            .catch(err=>{
                                console.log(err);
                            })
                            
                    }
                    
                })
              
            }
        
    })
    
    

};