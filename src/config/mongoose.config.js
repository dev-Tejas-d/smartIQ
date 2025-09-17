import mongoose from "mongoose";

export const connectingUsingMongoose = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/smartIQ")
        console.log("Mongodb connected using mongoose");
    }catch(err){
        console.log("Error while connecting to db");
        console.log(err);
    }
}