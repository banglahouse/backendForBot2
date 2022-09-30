const express = require('express');
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const footballRouter = require('./footballRouter')



const port = process.env.PORT || 5000;

// sendFile will go here
app.listen(port);
console.log('Server started at http://localhost:' + port);


app.use('/botwebsites',footballRouter)