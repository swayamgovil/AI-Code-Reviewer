const express=require('express');
const aiController = require('../controller/ai.controller')

const router = express.Router(); 

router.post("/get-response", aiController.getResponse)

module.exports = router;

//Runs the get-response Post API