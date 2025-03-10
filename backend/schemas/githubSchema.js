import mongoose from "mongoose"

const githubSchema = new mongoose.Schema({
    githubID:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        
    }
})

const githubModel = mongoose.model("githubAccounts" , githubSchema)

export default githubModel