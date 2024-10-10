import React, { useState } from 'react'
import './LogIn.css';
import axios from "axios";

import { useNavigate } from 'react-router-dom';


const LogIn = () => {
  const history=useNavigate();
  const [input,setinput]=useState({email:"",password:""});
  const change=(e)=>{
    const {name,value}=e.target;
    setinput({...input,[name]:value})
  }
  const submit=async(e)=>{
    e.preventDefault(); 
    console.log(input);
    await axios.post("http://localhost:3000/api/v1/login",input).then((response)=>{
        // sessionStorage.setItem("id",response.data.input._id)
        setinput({email:"",password:""});
        history("/todo");
      })
    };
  return (
    <div className='signup d-flex justify-content-center align-items-center'>
        <div className='container bg-body-secondary w-50 h-auto box p-5'>
          <div className='row'>
            <div className="col-12 d-flex justify-content-center align-items-cente pt-0">
                <h1>LogIn</h1>
            </div><hr/>
             <div class="col-12 d-flex justify-content-center p-2"><input type="email" name="email" onChange={change} value={input.email} class="form-control w-50" placeholder="Email Adress"/></div>
             <div class="col-12 d-flex justify-content-center p-2"><input type="password" name="password" onChange={change} value={input.password} class="form-control w-50" placeholder="Password"/></div>
             <button class="col-12 d-flex justify-content-center p-2 btn button w-25 ms-10 mt-3" onClick={submit}>Submit</button>
          </div>
        </div>
    </div>
           
  )
}

export default LogIn
