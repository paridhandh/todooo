import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
        },
        username:{
            type:String,
        },
        password:{
            type:String,
        },
        list:[{
             type:mongoose.Schema.Types.ObjectId,
             ref:"List"
         }]
    }
);
userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();
    }
    this.password= await bcrypt.hash(this.password,10);
});
userSchema.statics.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
};
export const User = mongoose.model("User",userSchema);