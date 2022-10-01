const f1Model = require("../Model/f1Model");



module.exports.getAllf1Websites = async function getAllWebsite(req, res) {
  
    let allWebsites = await f1Model.find();
    res.json({ message: 'list of all website', data: allWebsites })
}


module.exports.deleteWebsite = async function deleteWebsite(req, res) {
    let dataToBeDeleted = req.body.id;
    console.log(dataToBeDeleted);
 try{  
    let website = await f1Model.findByIdAndDelete(dataToBeDeleted)
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
    let website = await f1Model.deleteMany({_id:{$in:dataToBeDeleted}})
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


