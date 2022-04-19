const express = require('express');
const router = express.Router();

const batchesController= require("../controllers/batchesController")
const developersController= require("../controllers/developersController")



router.post("/createBatch", batchesController.createBatch )


router.post("/createDeveloper",developersController.createDeveloper)


router.get("/schlarship",developersController.schlarship)
router.get("dataWithValue",developersController.dataWithValue)
module.exports = router;