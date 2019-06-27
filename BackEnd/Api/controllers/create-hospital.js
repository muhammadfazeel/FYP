const mongoose=require('mongoose');
const bcrpt=require('bcrypt');
const jwt=require('jsonwebtoken');


const createHospital=require('../Models/create-hospital');


//*******To Create Hospital*************//
exports.createHospital=(req,res,next)=>{
    createHospital.find({
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
                            const hospital=new createHospital ({
                                _id:new mongoose.Types.ObjectId(),
                                title:req.body.title,
                                email:req.body.email,
                                password:hash,
                                address:req.body.address,
                                phone:req.body.phone,
                                patient_limit:req.body.patient_limit,
                                dr_limit:req.body.dr_limit
                            });
                            hospital.save()
                            .then(result=>{
                                console.log(result);
                                res.status(201).json({
                                    message:'Hospital Created'
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