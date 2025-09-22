import mongoose from "mongoose";


 
export const UserSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:[true, "Emial is required"]
        },
        password:{
            type:String,
            required:[true, "Password is required"]        
        },
        gender:{
            type:String,
            enum:["Male", "Female", "Other"],
            required:[true, "Gender is required"]
        },
        course:{
            type:String,
            enum:["JEE", "NEET", "NDA", "SCC", "Boards"]
        },
        isVerified:{
            type:Boolean,
            default:false
        },
        otp:{
        type:Number
        }
})