const mongoose=require("mongoose")
const user_schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
module.exports=mongoose.model("users",user_schema)