import React, { useState } from 'react'
import './SignUp.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const history=useNavigate();
  const [input,setinput]=useState({email:"",username:"",password:""});
  const change=(e)=>{
    const {name,value}=e.target;
    setinput({...input,[name]:value})
  }
  const submit=async(e)=>{
    e.preventDefault(); 
    await axios.post("http://localhost:3000/api/v1/register",input).then((response)=>{
      if(response.data.message==='User is already registered.Please log in')
      {
        alert(response.data.message);
      }
      else
      {
        // alert(response.data.message);
        setinput({email:"",username:"",password:""});
        history("/logIn");
      }
      
    })
  }
  return (
    <div className='signup d-flex justify-content-center align-items-center'>
        <div className='container bg-body-secondary w-50 h-auto box p-5'>
          <div className='row'>
            <div className="col-12 d-flex justify-content-center align-items-cente pt-0">
                <h1>Sign Up</h1>
            </div><hr/>
             <div className="col-12 d-flex justify-content-center p-2"><input type="email" name="email" onChange={change} value={input.email} className="form-control w-50" placeholder="Email Adress"/></div>
             <div className="col-12 d-flex justify-content-center p-2"><input type="text" name="username" onChange={change} value={input.username} className="form-control w-50" placeholder="Username"/></div>
             <div className="col-12 d-flex justify-content-center p-2"><input type="password" name="password" onChange={change} value={input.password} className="form-control w-50" placeholder="Password"/></div>
             <button className="col-12 d-flex justify-content-center p-2 btn button w-25 ms-10 mt-3" onClick={submit}>Submit</button>
          </div>
            
        </div>
    </div>
           
  )
}

export default SignUp
