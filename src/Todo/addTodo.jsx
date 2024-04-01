import React from 'react'

const AddTodo = () => {
  return (
    <>
        <div className="p-2 bg-white w-full">
            <h2 className="text-2xl text-green-500">Add Todo Here</h2>
            <h3>Enter todo name:</h3>
            <input type='text' className='p-2, bg-slate-100 w-full mt-2' placeholder='Enter todo'/>
        </div>
      
    </>
  )
}

export default AddTodo