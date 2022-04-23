const req = require("express/lib/request")
const productModel=require("../models/productModel")

let productSchema=async function(req,res){
    let product=req.body
    let productdoc= await productModel.create(product)
    res.send({status: true, msg:productdoc})
}


module.exports.productSchema=productSchema


