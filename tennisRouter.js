const express = require('express');
// const express = require('express');

const tennisRouter = express.Router()
// const {getAllCricketWebsite,deleteWebsite,deleteManyWebsites} = require('./controller/cricketController');
const { getAllTennisWebsites,deleteWebsite,deleteManyWebsites } = require('./controller/tennisController');

tennisRouter
.route('/tennis')
.get(getAllTennisWebsites)
.delete(deleteWebsite)

tennisRouter
.route('/tennis/deleteMany')
.delete(deleteManyWebsites)






module.exports = tennisRouter 