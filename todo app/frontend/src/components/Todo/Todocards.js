import React from 'react'
import './Todo.css'
const Todocards = ({title,body,id,delid,display}) => {
  return (
    <div className='p-3 todocard'>
      <div>
        <h4>{title}</h4>
        <p className='todo-card-p'>{body.split("",77)}...</p>
      </div>
      <div className='d-flex justify-content-around'>
        <div>
        <i className="bi bi-pencil-square card-icons" onClick={()=>{display("block")}}>Update</i>&nbsp;
        </div>
        <div>
        <i className="bi bi-trash card-icons del" onClick={()=>{delid(id)}}>Delete</i>&nbsp;
        </div>
      </div>
    </div>
  )
}

export default Todocards
