 const batchesModel = require("../models/batchesModel")
const developersModel= require("../models/developersModel")
//const batchesModel=require("../Models/batchesModel")
const createDeveloper= async function (req, res) {
    let developer= req.body
    console.log(developer)
    let developerCreated = await developersModel.create(developer)
    res.send({data: developerCreated})
}
let schlarship=async function(req,res){
    let data = await developersModel.find({gender:"Female", percentage:{$gte:70}})

    res.send({msg:data}) 
}

let dataWithValue= async function(req,res){
    let body=req.query.percentage
    let prog=req.query.program
    let batchData=await batchesModel.find({batchName:prog}).select({_id:true})
    let get= await developersModel.find({batch:batchData,percentage:{$gte:body}})
    req.send({msg:get})
}



module.exports.dataWithValue=dataWithValue
module.exports.createDeveloper= createDeveloper

module.exports.schlarship=schlarship






// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

///}

