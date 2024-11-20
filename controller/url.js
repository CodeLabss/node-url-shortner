const shortid = require("shortid") 
const url = require("../model/url")


async function handleGenerateUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'URL is required' });

    const shortId = shortid();
    await url.create({
        shortId: shortId,
        redirectUrl: body.url, // Ensure this matches your schema
        clicks: []
    });
    return res.json({ id: shortId });
}

async function handleRedirect(req, res) {
    const shortId = req.params.shortId;
    const entry = await url.findOneAndUpdate(
        { shortId }, 
        {
            $push: 
            {
                clicks:{
                    timestamp: Date.now(),
                }
            }
        }
        
    );
    res.redirect(entry.redirectUrl)
}

async function GetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await url.findOne({shortId})
    return res.json({totalClicks: result.clicks.length} )
}

module.exports = {
    handleGenerateUrl,
    handleRedirect,
    GetAnalytics
}