const aiService = require('../services/ai.service')
//import aiService from "../services/ai.service.js"
module.exports.getResponse = async (req, res)=>{
    const prompt=req.query.prompt;

    if(!prompt){
        return res.status(400).send("Prompt Required");
    }

    const response= await aiService(prompt);

    res.send(response);
}
