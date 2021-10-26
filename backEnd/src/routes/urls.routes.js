//importing our router module and our controllers
const { Router } = require('express')
const urlsCtrl = require('../controllers/urls.controllers')
const router = Router()

//Creating our URLs
router.get('/', urlsCtrl.getUrls)
router.post('/', urlsCtrl.createUrls)
router.get('/:shortUrl', urlsCtrl.getNewUrl)

//Exporting our routes
module.exports = router;