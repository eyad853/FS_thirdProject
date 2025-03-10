import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import dotenv from "dotenv"
import githubModel from '../schemas/githubSchema.js'; 
dotenv.config()

passport.use( new GitHubStrategy(
    {
        clientID:process.env.githubClientID,
        clientSecret:process.env.githubClientSecret,
        callbackURL:process.env.githubCallbackURL
    },
    async (accessToken , refreshToken , profile , done)=>{
        try{
            const user = await githubModel.findOne({githubID:profile.id})
            if(user){
                return done(null , user)
            }else{
                console.log(profile.name);
                const newUser = new githubModel({
                    githubID:profile.id,
                    username:profile.username,
                    email:profile.emails && profile.emails[0] ? profile.emails[0].value : ''
                })
                const savedUser = await newUser.save();
                done(null , savedUser)
            }
        }catch(error){
        return  done(error)
        }
    }))

    passport.serializeUser((user , done)=>{
        done(null , user.githubID)
    })

    passport.deserializeUser(async(githubID , done)=>{
        try {
            const user = await githubModel.findOne({ githubID }); // Fixed this — findById wouldn’t work with githubID
            done(null, user);
        } catch (error) {
            done(error);
        }
    })

