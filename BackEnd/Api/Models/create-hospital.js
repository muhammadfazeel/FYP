const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{
        type:String,
        require:true
    },
    address:{
    type:String,
    require:true
    },
    phone:{
        type: String,
        validate: {
            validator: function(v) {
              return /\d{4}-\d{7}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
          },
          require:true
    },
    patient_limit:{
        type:Number,
        require:true
    },
    dr_limit:{
        type:Number,
        require:true
    }
});
module.exports=mongoose.model('hospital',hospitalSchema);