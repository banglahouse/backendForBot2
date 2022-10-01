const express = require('express');
// const express = require('express');

const cricketRouter = express.Router()
const {getAllCricketWebsite,deleteWebsite,deleteManyWebsites} = require('./controller/cricketController')

cricketRouter
.route('/cricket')
.get(getAllCricketWebsite)
.delete(deleteWebsite)

cricketRouter
.route('/cricket/deleteMany')
.delete(deleteManyWebsites)






module.exports = cricketRouter 