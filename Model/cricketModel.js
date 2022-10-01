const mongoose = require('mongoose')




const dblink =`mongodb+srv://banglahouse:Madarchod1.@cluster0.uy04bh7.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(dblink)
.then(function(db){
    console.log('cricket db connected')
})
.catch(function(err){
    console.log(err);
})

const urlsForCricket = new mongoose.Schema({
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
const cricketModel = mongoose.model('cricketModel',urlsForCricket)
module.exports = cricketModel
