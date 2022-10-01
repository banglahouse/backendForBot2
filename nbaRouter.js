const express = require('express');
// const express = require('express');

const nbaRouter = express.Router()
const { getAllNBAWebsites,deleteWebsite,deleteManyWebsites } = require('./controller/nbaController');

nbaRouter
.route('/nba')
.get(getAllNBAWebsites)
.delete(deleteWebsite)

nbaRouter
.route('/nba/deleteMany')
.delete(deleteManyWebsites)






module.exports = nbaRouter 