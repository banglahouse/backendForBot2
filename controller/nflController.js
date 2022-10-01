// const footballModel = require('../Model/footballModel');
// const tennisModel = require('../Model/tennismodel');

const nflModel = require("../Model/nflModel");


module.exports.getAllNFLWebsites = async function getAllWebsite(req, res) {
  
    let allWebsites = await nflModel.find();
    res.json({ message: 'list of all website', data: allWebsites })
}


module.exports.deleteWebsite = async function deleteWebsite(req, res) {
    let dataToBeDeleted = req.body.id;
    console.log(dataToBeDeleted);
 try{  
    let website = await nflModel.findByIdAndDelete(dataToBeDeleted)
    console.log(website)
    res.json({
        message: 'data deleted successfully',
        data: website
    })
    if(!website){
        res.json({
            message:'user not found!'
        })
    }
 }catch(err){
     res.status(500).json({
         message:err.message
     })
 }
}

module.exports.deleteManyWebsites = async function deleteManyWebsite(req, res) {
    let dataToBeDeleted = req.body.id;
    console.log(dataToBeDeleted);
 try{  
    let website = await nflModel.deleteMany({_id:{$in:dataToBeDeleted}})
    console.log(website)
    res.json({
        message: 'data deleted successfully',
        data: website
    })
    if(!website){
        res.json({
            message:'user not found!'
        })
    }
 }catch(err){
     res.status(500).json({
         message:err.message
     })
 }
}


