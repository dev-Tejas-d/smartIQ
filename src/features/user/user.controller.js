import UserRepository from "./user.repository.js"
import bcrypt from "bcrypt"
import { sendOtp } from "../../email/OTPEmail.js";
import jwt from "jsonwebtoken"



export default class UserController{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async registration(req, res){
        try{
            let hashedPassword = await bcrypt.hash(req.body.password, 12);
            req.body.password = hashedPassword
            let {name, email, password, gender, course} = req.body;
            const otp = Math.floor(Math.random() * 9000) +1000;
            sendOtp(email,otp)
            let result = await this.userRepository.addUser({name, email, password, gender, course, otp});
            if(!result){
                throw new Error("SOmethign went wronf")
            }
            res.status(200).send(result)
        }
        catch(error){
            throw new Error(error)
        }
    }

    async login(req, res){
        try{
            let {email, password} = req.body;
        let result = await this.userRepository.loginUser(email, password);
        if(!result){
            throw new Error("Somethig went Wrong")
        }
        let token = jwt.sign(
            {
                userId : result.id,
                userEmail:result.email,
                Usercourse:result.course
            },
            "2qMT23tuZGamkIddI5rMdI1r6yh6uwS2",
            {
                expiresIn:'1h'
            }
        )
        res.cookie('token', token, {
            httpOnly: true,        
            secure: false,         
            sameSite: 'lax'
        })
        res.status(200).send(result)
        }
        catch(error){
            throw new Error(error)
        }
    }

    async verifyOtp(req, res){
        try{
            let {email, otp} = req.body;
            let result = await this.userRepository.checkOTP(email, otp)
            if(!result){
                throw new Error("Somethig went Wrong")
            }
            res.status(200).send(result)
        }
        catch(error){
            throw new Error(error)
        }
    }

    async forgotPassword(req, res){
        const {email} = req.body;
        const otp = Math.floor(Math.random() * 9000) +1000;
        sendOtp(email,otp);
        let setOTPinDb = await this.userRepository.forgotPassword(email, otp);
        res.status(200).send(setOTPinDb)
    }

    async checkOtpAndChangePass(req, res){
        let hashedPassword = await bcrypt.hash(req.body.password, 12);
        req.body.password = hashedPassword
        const {email, otp, password}=req.body;
        const result = await this.userRepository.changePass(email, otp, password);
          res.status(200).send(result)
    }

    async logout(req, res){
        res.clearCookie('token',{
             httpOnly: true,
             secure: false, 
             sameSite: 'lax'
        });
        res.status(200).send("Logout successfull");

    }
}