const batchesModel= require("../models/batchesModel")
const developerModel= require("../models/developersModel")

const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await batchesModel.create(batch)
    res.send({data: batchCreated})
}

module.exports.createBatch= createBatch
