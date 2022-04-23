const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    // Write the schema content
    
       
        productName:String,
        category:String,
        price:{
            required:true,
            type:Number
        } //mandatory property
    
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema) //users


