const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
const userModel = require("./data/data")
app.use(express.json())
mongoose.connect("mongodb+srv://rohandb:rohandb123@testdata.kdgizeo.mongodb.net/employe")

app.post("/login",(req,res)=>{
    userModel.create(req.body)
    .then(emplyedata => res.json(emplyedata))
    .catch(err => res.json(err))
})


app.listen(3001,()=>{
    console.log("server is runnig at port 3001")
})