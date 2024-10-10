import mongoose from "mongoose";
const listSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        body:{
            type:String,
            required:true,
        },
        user:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }]
    }
);
export const List = mongoose.model("List",listSchema);