import passport from 'passport';
import googleModel from '../schemas/GoolgeSchemal.js';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from "dotenv"
dotenv.config()

passport.use("google" , new GoogleStrategy(
    {
        clientID:process.env.googleClientID,
        clientSecret:process.env.googleClientSecret,
        callbackURL:process.env.googleCallbackURL
    },
    async (accessToken , refreshToken , profile , done)=>{
        try{
            const user = await googleModel.findOne({googleId:profile.id})
            if(user){
                return done(null , user)
            }else{
                console.log(profile.name);
                const newUser = new googleModel({
                    googleId:profile.id,
                    firstname:profile.name.givenName,
                    lastname:profile.name.familyName || "Unknown",
                    email:profile.emails[0].value
                })
                const savedUser = await newUser.save();
                done(null , savedUser)
            }
        }catch(error){
        return  done(error)
        }
    }))

    passport.serializeUser((user , done)=>{
        done(null , user.googleId)
    })

    passport.deserializeUser(async(googleId , done)=>{
        try {
            const user = await googleModel.findOne({ googleId }); // Fixed this — findById wouldn’t work with googleId
            done(null, user);
        } catch (error) {
            done(error);
        }
    })

