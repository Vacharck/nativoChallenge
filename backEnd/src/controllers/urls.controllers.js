//creating our url object
const urlCtrl = {}

const Url = require('../models/Url')

urlCtrl.getUrls = async (req, res) => {
    const urls = await Url.find()
    res.json(urls)
}

urlCtrl.createUrls = async (req, res)=>{
    await Url.create({
        full: req.body.originalURL
    })
    res.redirect('/')
}

urlCtrl.getNewUrl = async (req, res) => {
    const newUrl = await Url.findOne({ short: req.params.Url })
    if (newUrl == null) return res.sendStatus(404)

    newUrl.clicks++
    newUrl.save()

    res.redirect(newUrl.full)
}

module.exports = urlCtrl;