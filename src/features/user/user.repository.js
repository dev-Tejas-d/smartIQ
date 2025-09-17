import mongoose from "mongoose";
import { UserSchema } from "./user.Schema.js";
import bcrypt from "bcrypt"

const UserModel = mongoose.model("User", UserSchema)

export default class UserRepository{
        async addUser(useData){
            try{
                let newUser = new UserModel(useData);
                await newUser.save()
                return newUser
            }
            catch(error){
                console.log(error);
                throw new Error(error)
            }
        }

        async loginUser(email, password){
            try{   
                let userByEmail = await UserModel.findOne({email});
                if(!userByEmail){
                    return "User not found"
                }
                let matchPassword = await bcrypt.compare(password, userByEmail.password);
                if(!matchPassword){
                    return "Wrong Password"
                }

                return userByEmail
            }
            catch(error){
                throw new Error(error)
            }
        } 

        async checkOTP(email, otp){
            try{
                let user = await UserModel.findOne({email});
                if(!user){
                    return "User not found"
                }
                if(user.otp == otp){
                  return {text:"Verified", user}  
                }
            }
            catch(error){
                throw new Error(error)
            }
        }
}