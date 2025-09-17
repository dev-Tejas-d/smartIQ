import express from "express"
import UserController from "./user.controller.js"

let userController = new UserController();

let userRouter = express.Router();

userRouter.post('/registration', (req, res)=>{
    userController.registration(req, res)
})

userRouter.post('/login', (req, res)=>{
    userController.login(req, res)
})

userRouter.post('/verify', (req, res)=>{
    userController.verifyOtp(req, res)
} )

export default userRouter