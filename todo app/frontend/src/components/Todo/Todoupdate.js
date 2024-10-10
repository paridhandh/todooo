import React from 'react'

const Todoupdate = ({display}) => {
  return (
    <div className='p-5 d-flex justify-content-center align-items-start flex-column'>
      <h3>Update your task</h3>
      <input type="text" className='todo-input my-4 w-100 p-3'></input>
      <textarea className='todo-input w-100 p-3'></textarea>
      <div>
        <button className='btn btn-dark my-4'>Update</button>
        <button className='btn btn-dark my-4 mx-4' onClick={()=>display("none")}>Close</button>
      </div>
    </div>
  )
}

export default Todoupdate
