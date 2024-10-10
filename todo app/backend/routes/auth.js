import express from "express";
import {User} from "../models/user.js";
import bcrypt from "bcrypt";
// import ErrorHandler from "../middleware/errormiddleware.js";
const router=express.Router();
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

//sign up
router.post("/register",async(req,res)=>{
    try
    {
        const {email,username,password}=req.body;
        let emailver=await User.findOne({email});
        if(emailver)
        {
            res.status(200).json({message : "User is already registered.Please log in"});
            return;            
        };
        // const hashPassword=bcrypt.hash(password,10);
        // console.log(hashPassword);
        const user=new User({email,username,password});
        await user.save().then(()=>{
            res.status(200).json({message:"Signing up successful"});
            
        });
        // catch(hashError)
        // {
        //     console.error("Error hashing password:", hashError);
        //     res.status(400).json({ message: "Error hashing password" });
        // }
    }
    catch(error)
    {
        res.status(200).json({
            message:"user already exists"
        });
    }
});
//login
router.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body;
        let emailver=await User.findOne({email});
        if(!emailver)
        {
            res.status(200).json({message : "User not found. Please sign up"});
            return;            
        };
        const isPasswordMatched=bcrypt.compareSync(password,emailver.password);
        if(!isPasswordMatched){
            res.status(200).json({message : "Incorrect password"});
            return;    
        }
        // const {password,...others}=user._doc;
        res.status(200).json({username:emailver.username,message:"login successful"});
    }
    catch(error)
    {
        console.log(error);
        res.status(200).json({
            message:"can't log in"
        });
    }
})
export default router;