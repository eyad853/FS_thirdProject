import express from "express"
import {firstGithubRoute, firstGoogleRoute, normalLogin, normalSignUp, secondGithubRoute, secondGoogleRoute } from "../controllers/controllers.js"

const router =express.Router()

router.post("/signup" ,normalSignUp)
router.post("/login" ,normalLogin)
router.get("/auth/google" , firstGoogleRoute)
router.get('/auth/google/callback', secondGoogleRoute)
router.get('/auth/github', firstGithubRoute);
router.get('/auth/github/callback', secondGithubRoute);

export default router