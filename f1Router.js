const express = require('express');
const { getAllf1Websites,deleteWebsite,deleteManyWebsites } = require('./controller/f1Controller');
const f1Router = express.Router()
// const {getAllFootballWebsite,deleteWebsite,deleteManyWebsites} = require('./controller/footballController')

f1Router
.route('/f1')
.get(getAllf1Websites)
.delete(deleteWebsite)

f1Router.route('/f1/deleteMany')
.delete(deleteManyWebsites)






module.exports = f1Router 