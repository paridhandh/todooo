import express from 'express';
import {User} from '../models/user.js';
import {List} from '../models/list.js';
const router=express.Router();
//add task
router.post("/addTask",async(req,res)=>{
    try{
    const {title,body,email}=req.body;
    const existingUser=await User.findOne({email});
    if(existingUser)
    {
        const list=new List({title,body,user:existingUser});
        await list.save().then(()=>res.status(200).json(list));
        existingUser.list.push(list);
        await existingUser.save();
    }
    }
    catch(error)
    {
        console.log(error);
    }
});
//update
router.put("/updateTask/:id",async(req,res)=>{
    try{
    const {title,body,email}=req.body;
    const existingUser=await User.findOne({email});
    if(existingUser)
    {
        // await List.findByIdAndUpdate(req.params.id,{title,body});
        // res.status(200).json({message:"Task updated"});
        const updatedList = await List.findByIdAndUpdate(req.params.id, { title, body });
        const existingUser = await User.findOne({ email });
        const listIndex = existingUser.list.findIndex((listId) => listId.equals(updatedList._id));
        if (listIndex !== -1) {
        existingUser.list[listIndex] = updatedList._id;
        await existingUser.save(); // Save the updated User document
        }
        res.status(200).json({ message: "Task updated" });
    }
    }
    catch(error)
    {
        console.log(error);
    }
});
//delete
router.delete("/deleteTask/:id",async(req,res)=>{
    try{
    const {email}=req.body;
    const existingUser=await User.findOne({email});
    if(existingUser)
    {
        // await List.findByIdAndDelete(req.params.id).then(()=>{
        //     res.status(200).json({message:"Task deleted"});
        // })
    const deletedList = await List.findByIdAndDelete(req.params.id);
    if (deletedList) 
        {
        const listIndex = existingUser .list.findIndex((listId) => listId.equals(deletedList._id));
            if (listIndex !== -1) 
            {
                existingUser .list.splice(listIndex, 1);
                await existingUser .save(); // Save the updated User document
            }
        }
        res.status(200).json({ message: "Task deleted" });
    }   
}
    catch(error)
    {
        console.log(error);
    }
});
//gettask
router.get("/getTask/:id",async(req,res)=>{
    const list=await List.find({user:req.params.id}).sort({createdAt:-1});
    if(list.length!==0)
    {
        res.status(200).json({list});
    }
    else
    {
        res.status(200).json({message:"No Tasks"});
    }
})
export default router;

