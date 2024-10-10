import express from "express";
import {conn} from "./connection/conn.js";
import cors from "cors";
const app=express();
import auth from "./routes/auth.js";
import list from "./routes/list.js";
app.use(express.json());
app.use(cors());
app.use("/api/v1",auth);
app.use("/api/v2",list);

conn();
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});