const express = require('express')
const router = express.Router()
const{handleGenerateUrl, handleRedirect, GetAnalytics} = require("../controller/url")

router.post("/", handleGenerateUrl)
router.get("/:shortId", handleRedirect)
router.get("/analytics/:shortId", GetAnalytics)

module.exports = router;