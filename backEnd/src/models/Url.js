//Importing our modules to create a schema and a short url
const {Schema, model} = require("mongoose");
const shortid = require('shortid');

const urlSchema = new Schema(
    {
        full: { type: String, required: true },
        clicks: { type: Number, required: true, default: 0 },
        short: { type: String, required: true, default: shortid.generate }    
    }
);

module.exports = model("Url", urlSchema)