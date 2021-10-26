//Module importation
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

//Server initialization
const app = express()

//Creating and initializing the port variable
app.set('port', process.env.PORT || 4000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({    extended:false  }))

app.use("/api/urls", require('./routes/urls.routes'))

//Server exportation
module.exports = app