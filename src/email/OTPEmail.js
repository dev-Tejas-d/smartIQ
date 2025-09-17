import { text } from "express"
import nodemailer from "nodemailer"




export const sendOtp = async(email, otp)=>{

    const transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"tejasdhulugade7977@gmail.com",
            pass:"xblt jxvq tymh lwod"
        }
    })

    const mailOptions = {
        form: "tejasdhulugade7977@gmailcom",
        to:email,
        subject:"OTP",
        text:`your otp is ${otp}`
    }

    await transport.sendMail(mailOptions);
}