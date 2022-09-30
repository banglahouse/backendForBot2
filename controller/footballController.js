const footballModel = require('../Model/footballModel')


module.exports.getAllFootballWebsite = async function getAllWebsite(req, res) {
  
    let allWebsites = await footballModel.find();
    res.json({ message: 'list of all users', data: allWebsites })
}


module.exports.deleteWebsite = async function deleteWebsite(req, res) {
    let dataToBeDeleted = req.body.id;
    console.log(dataToBeDeleted);
 try{  
    let website = await footballModel.findByIdAndDelete(dataToBeDeleted)
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
    let website = await footballModel.deleteMany({_id:{$in:dataToBeDeleted}})
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

// router.route("/delete").delete(function(req, res) {
//     details.deleteMany(
//       {
//         _id: {
//           $in: [
//             "5dc4705254a67437ca1aafb0",
//             "5dc4705554a67437ca1aafb1",
//             "5dc4705854a67437ca1aafb2"
//           ]
//         }
//       },
//       function(err, result) {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send(result);
//         }
//       }
//     );
//   });