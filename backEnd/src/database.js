//Importing the mongoose module
const mongoose = require('mongoose')

//connecting to the database
mongoose
.connect('mongodb://localhost/database',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
.then((db) => console.log("Db is connected"))
.catch((err) => console.log(console.log(err)))