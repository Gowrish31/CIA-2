const { string } = require('i/lib/util')
const mongoose  = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name : {type : String , required :true},
    city : {type:String , required :true},
    items : [{type : mongoose.Schema.Types.ObjectId,ref : 'item'}],
})

module.exports = mongoose.model("restaurant",restaurantSchema)