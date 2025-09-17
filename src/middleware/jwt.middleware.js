import jwt from "jsonwebtoken"

const jwtAuth = (req, res, next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new Error("Register or login please"))
    }
    
    
}