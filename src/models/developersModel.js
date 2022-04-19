const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const developersSchema = new mongoose.Schema( {
    
        
                name:String,
                
                percentage:Number,
    gender:
    
        {
            type:String,
            enum:   ["Male","Female","Other" ]
            
        },
        batches:{
            type:ObjectId,
            ref:'batch'
        }

}, { timestamps: true });

module.exports = mongoose.model('developer',developersSchema)
