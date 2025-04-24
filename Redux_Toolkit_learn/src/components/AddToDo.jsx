import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddToDo = () => {
    const [input, setInput]=useState("");
     const dispatch=useDispatch();
     const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
     }


  return (
    <form
    onSubmit={addTodoHandler}
    className="flex flex-col sm:flex-row items-center gap-4 mt-12 w-full max-w-md"
  >
    <input
      type="text"
      className="w-full sm:flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-indigo-700/50"
    >
      Add Todo
    </button>
  </form>
  
)
  
}

export default AddToDo
