const express = require('express');
const bodyParser = require('body-parser'); // managing middleware
const api = require('./routes/api')
const cors = require('cors');

const PORT = 3000

const app = express()
app.use(cors()) // angular port and server r running different port so cors
// cors is miidleware to connect those port

app.use(bodyParser.json());
app.use('/api',api) // when we request to server /api it wll use api which is require('./routes/api')

// app.get('/', function(req, res){
//     res.send(`<h1>Hello from other Planet ! `)
// })

app.listen(PORT, function(req, res){
    console.log('server running on localhost: ' + PORT)

})
//npm run server