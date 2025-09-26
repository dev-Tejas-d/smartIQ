import express from "express"
import UserController from "./user.controller.js"
import { jwtAuth } from "../../middleware/jwt.middleware.js";


let userController = new UserController();

let userRouter = express.Router();



userRouter.post('/registration', (req, res)=>{
    userController.registration(req, res)
})

userRouter.post('/login', (req, res)=>{
    userController.login(req, res)
})

userRouter.post('/verify', jwtAuth, (req, res)=>{
    userController.verifyOtp(req, res)
} )

userRouter.post('/forgotPassword', jwtAuth, (req, res)=>{
    userController.forgotPassword(req, res)
})

userRouter.post('/changePassword', jwtAuth, (req, res)=>{
    userController.checkOtpAndChangePass(req, res)
})

userRouter.post('/logout', (req,res)=>{
    userController.logout(req, res)
})

userRouter.post
export default userRouter