import mongoose from "mongoose";
export const conn=()=>{
    try{
        mongoose.connect("mongodb+srv://ayushisata:todolistps@todo.yk120.mongodb.net/?retryWrites=true&w=majority&appName=todo").then(()=>{
        console.log("connected to database");
    });}
    catch(error)
    {
        res.status(400).json({
            message:"not connected to database",
        })
    }
};