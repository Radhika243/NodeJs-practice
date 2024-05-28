const shortId = require('shortid');
const URL = require('../model/url')

async function handleGenerateShortId(req,res){
    const body = req.body;
    const shortURLId = shortId(8);
    if(!body.url) return res.status(400).json({message:"URL is required"})
    await URL.create({
        shortId:shortURLId,
        redirectURL:body.url,
        visitHistory:[]
    });

    return res.status(201).json({
        id:shortURLId
    })
}

async function handleAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.status(200).json({
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory
    })

}

module.exports = {
    handleGenerateShortId,
    handleAnalytics
}