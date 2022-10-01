const mongoose = require('mongoose')


const dblink =`mongodb+srv://banglahouse:Madarchod1.@cluster0.uy04bh7.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(dblink)
.then(function(db){
    // var collection = db.Collection('footballmodels');
    
        console.log('db connected' )

})
.catch(function(err){
    console.log(err);
})


const urlsForFootball = new mongoose.Schema({
    title:{
        type: String,
        required: [true]

    }

    ,websites:{
        type: String,
        required: [true],
        unique : true

    },
    time:{
        type:String,
    }
})



const footballModel = mongoose.model('footballModel',urlsForFootball)

module.exports = footballModel
// console.log(conn);
