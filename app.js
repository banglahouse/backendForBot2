const express = require('express');
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const footballRouter = require('./footballRouter')
const cricketRouter = require('./cricketRouter');
const tennisRouter = require('./tennisRouter');
const nbaRouter = require('./nbaRouter');
const nflRouter = require('./nflRouter');
const f1Router = require('./f1Router');


const port = process.env.PORT || 5000;

// sendFile will go here
app.listen(port);
console.log('Server started at http://localhost:' + port);


app.use('/botwebsites',footballRouter)
app.use('/botwebsites',cricketRouter)
app.use('/botwebsites',tennisRouter)
app.use('/botwebsites',nbaRouter)
app.use('/botwebsites',nflRouter)
app.use('/botwebsites',f1Router)