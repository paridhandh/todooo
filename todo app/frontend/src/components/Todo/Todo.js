import React, { useState } from 'react'
import './Todo.css';
import Todocards from './Todocards.js';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
  import 'react-toastify/dist/ReactToastify.css';
import Todoupdate from './Todoupdate.js';
const Todo = () => {
  const isLoggedIn=useSelector((state)=>state.isLoggedIn)
    const [input,setInput]=useState({title:"",body:""});
    const [array,setArray]=useState([]);
    const show=()=>{
        document.getElementById("textarea").style.display="block";
    }
    const change=(e)=>{
        const {name,value}=e.target;
        setInput({...input,[name]:value})
    }
    const submit=()=>{
      if(input.title==="" && input.body===""){
        toast.error("Please fill out complete task");
        return;
      }
        setArray([...array,input]);
        setInput({title:"",body:""});
        toast.success("Your task is added");
        {!isLoggedIn &&   toast.error("Your task is not saved. Please signup");}
      
    }
    const del=(id)=>{
      array.splice(id,"1");
      setArray([...array]);
      toast.success("Your task is successfully deleted");
    }
    const dis=(value)=>{
      document.getElementById("up").style.display=value;
    }
  return (
    <>
    <div className='todo'>
      <ToastContainer/>
      <div className='todo-main container d-flex justify-content-center align-items-center flex-column'>
        <div className='d-flex flex-column todo-input-div w-25 my-5'>
            <input type="text" placeholder='title' className='my-2 todo-input p-2' name="title" value={input.title} onClick={show} onChange={change}></input>
            <textarea type="text" placeholder='body' id='textarea' className='todo-input p-2' value={input.body} name="body" onChange={change}></textarea>
        </div>
        <button className='btn button p-2 w-25' onClick={submit}>Add</button>
      </div><br/>
      <div className='todo-body'>
        <div className="container-fluid">
            <div className="row">
                {array && array.map((item,index)=>(
                    <>
                        <div key={index} className="col-lg-3 mx-5 my-4 col-8">
                        <Todocards title={item.title} body={item.body} id={index} delid={del} display={dis}></Todocards>
                        </div>
                    </>
                ))}
            </div>
        </div>
      </div>
    </div>
    <div className='todo-update' id="up">
      <div className="container update">
      <Todoupdate display={dis}/>
      </div> 
    </div>
    </>
  )
}

export default Todo
