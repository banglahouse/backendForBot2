// const footballModel = require('../Model/footballModel');
const tennisModel = require('../Model/tennismodel');


module.exports.getAllTennisWebsites = async function getAllWebsite(req, res) {
  
    let allWebsites = await tennisModel.find();
    res.json({ message: 'list of all website', data: allWebsites })
}


module.exports.deleteWebsite = async function deleteWebsite(req, res) {
    let dataToBeDeleted = req.body.id;
    console.log(dataToBeDeleted);
 try{  
    let website = await tennisModel.findByIdAndDelete(dataToBeDeleted)
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
    let website = await tennisModel.deleteMany({_id:{$in:dataToBeDeleted}})
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


