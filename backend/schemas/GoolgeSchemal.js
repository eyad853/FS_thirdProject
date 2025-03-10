import mongoose from "mongoose"

const googleSchema = new mongoose.Schema({
    googleId:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const googleModel = mongoose.model("googleAccount" , googleSchema)

export default googleModel