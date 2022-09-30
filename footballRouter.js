const express = require('express');
const footballRouter = express.Router()
const {getAllFootballWebsite,deleteWebsite,deleteManyWebsites} = require('./controller/footballController')

footballRouter
.route('/football')
.get(getAllFootballWebsite)
.delete(deleteWebsite)

footballRouter
.route('/football/deleteMany')
.delete(deleteManyWebsites)






module.exports = footballRouter 