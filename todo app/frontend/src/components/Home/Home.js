import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const history=useNavigate();
  return (
    <>
    <div className='home d-flex justify-content-center align-items-center'>
        <div className='container d-flex justify-content-center align-items-center flex-column'>
            <h1 className='heading text-center'>Organize your<br/>work and life,finally!</h1><br/>
            <p className='para'>Become focused,organized,and calm with<br/>todo app.The world's #1 task manager app.</p>
            <button className='button btn p-2' onClick={()=>{
              history("/todo")
            }}>Make todo list</button>
        </div>
    </div>
      {/* <div className='d-flex justify-content-center buttons'>
            <div className='btn button'>Sign Up</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='btn button'>Log in</div>
        </div> */}
    </>
  )
}

export default Home
