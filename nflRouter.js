const express = require('express');
const { getAllNFLWebsites,deleteManyWebsites,deleteWebsite } = require('./controller/nflController');
const nflRouter = express.Router()

nflRouter
.route('/nfl')
.get(getAllNFLWebsites)
.delete(deleteWebsite)

nflRouter.route('/nfl/deleteMany')
.delete(deleteManyWebsites)






module.exports = nflRouter 