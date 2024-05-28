const express = require('express');
const router = express.Router();
const {handleGenerateShortId, handleAnalytics} = require('../controller/url')

router.post('/',handleGenerateShortId);

router.post('/analytics/:shortId',handleAnalytics)

module.exports = router;