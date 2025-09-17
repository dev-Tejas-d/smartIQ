import express from "express"
import { connectingUsingMongoose } from "./src/config/mongoose.config.js";
import userRouter from "./src/features/user/user.routes.js";

let server = express();
server.use(express.json())

server.use('/api/user', userRouter)

server.listen(3100, ()=>{
    console.log("Server is listening on port 3100");
    connectingUsingMongoose();
})