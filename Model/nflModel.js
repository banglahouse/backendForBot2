const mongoose = require('mongoose')




const dblink =`mongodb+srv://banglahouse:Madarchod1.@cluster0.uy04bh7.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(dblink)
.then(function(db){
    console.log('nba db connected')
})
.catch(function(err){
    console.log(err);
})

const urlsForNFL = new mongoose.Schema({
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
const nflModel = mongoose.model('nflModel',urlsForNFL)





module.exports = nflModel
