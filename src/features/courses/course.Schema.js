import mongoose from "mongoose";

export const CourseSchema = new mongoose.Schema({
    name:{
        type:String
    },
    teacher:{
        type:String
    },
    lecture:{
        type:Array
    }
})