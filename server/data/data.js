const mongoose = require("mongoose")

const userData = new mongoose.Schema({
    name : String,
    pass : String,
    cPass : String
})

const userModel = mongoose.model("employe",userData)
module.exports  = userModel