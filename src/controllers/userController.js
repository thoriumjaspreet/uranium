


const userModel= require("../models/userModel")

const createUser= async function (req, res) {
    let isFreeAppUser= req.headers.isFreeAppUser
    let data= req.body
    data.isFreeAppUser=isFreeAppUser
    let savedData= await userModel.create(data)
    //console.log(req.newAtribute)
    res.send({msg: savedData})     
}

const getUsersData= async function (req, res) {
    let allUsers= await userModel.find()
   // console.log(req.newAtribute)
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData














