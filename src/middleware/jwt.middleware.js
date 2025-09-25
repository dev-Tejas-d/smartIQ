import jwt from "jsonwebtoken"

export const jwtAuth = (req, res, next)=>{
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({ success: false, message: "Please login first" });
    }
    try{
        const payload = jwt.verify(token, 
            '2qMT23tuZGamkIddI5rMdI1r6yh6uwS2'
        )
            req.userID = payload.userId
            req.userMail = payload.userEmail
            next()
        }
    catch(error){
        console.log(error);
        return res.status(401).send('Unauthorized');
    }
}