import express from "express"
import mongoose from "mongoose"
import router from "./routes/route.js"
import cors from "cors"
import dotenv from 'dotenv'
import passport from "passport"
import session from "express-session"
import "./config/googlePassport.js"
import "./config/githubPassport.js"
import MongoStore from "connect-mongo"
import "./config/githubPassport.js"
dotenv.config()
const app = express()

app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(passport.initialize())
app.use(session({
secret:process.env.SESSION_SECRET,
saveUninitialized:false,
resave:false,
store:MongoStore.create({
mongoUrl:process.env.DB,
collectionName: 'sessions',  // Collection where sessions are stored
ttl: 14 * 24 * 60 * 60, // Session TTL in seconds (14 days)
})
}))

const handleConnect = async ()=>{
    await mongoose.connect(process.env.DB)
    console.log("db has been connected");
}
handleConnect()

app.use(express.json())

app.use(router)


const PORT=8000
app.listen(PORT , ()=>{
    console.log("server started");
    
})