import validationModel from "../schemas/schema.js"
import passport from "passport"


export const normalSignUp = async (req ,res)=>{
    const {firstname , lastname , username , email ,password}= req.body
    
    try{
        const isAccountExisted =await validationModel.findOne({email})
        if(isAccountExisted){
            return res.status(400).json({
                error:true,
                message:"account is already existed"
            })
        }

        const newUser= new validationModel({
            firstname,
            lastname,
            username,
            email,
            password
        })

        await newUser.save()

        return res.status(200).json({
            error:false,
            message:"account has been created successfully"
        })
    }catch(error){
        res.status(500).json({
            error:true,
            message:"internal server problem"
        })
    }
}

export  const normalLogin = async (req ,res)=>{
    const {email , password}=req.body
    try{
        const isAccountExisted =await validationModel.findOne({email})
        if(!isAccountExisted){
            return res.status(400).json({
                error:true,
                message:"account is not existed"
            })
        }
    
        return res.status(200).json({
            error:false,
            message:"user hass logged in successfully"
        })
    }catch(error){
        res.status(500).json({
            error:true,
            message:"internal server problem"
        })
    }
    }

export const firstGoogleRoute = passport.authenticate("google" , {
    scope: ['profile', 'email']
})

export const secondGoogleRoute =  passport.authenticate('google', {
    successRedirect: 'http://localhost:5173/GoogleHome', // Redirect if authentication succeeds
    failureRedirect: 'http://localhost:5173/login',    // Redirect if authentication fails
})

export const firstGithubRoute = passport.authenticate('github' ,  { scope: ['user:email'] })

export const secondGithubRoute =  passport.authenticate('github', { 
   successRedirect: 'http://localhost:5173/Ghhome', // No spaces, just the URL
failureRedirect: 'http://localhost:5173/login'
}
)

