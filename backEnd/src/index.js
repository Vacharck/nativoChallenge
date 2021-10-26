//Server module initialization
const database = require('./database')
const app = require('./app')

//Port to listen to
app.listen(app.get('port'))

//Console test
console.log('Server on port', app.get('port'))