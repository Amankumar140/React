import React, { use } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const ToDo = () => {

    const todos=useSelector(state=>state.todos);
    const dispatch=useDispatch();

  return (
    <>
    <div className="mt-10 w-full max-w-md">
  <h2 className="text-xl text-gray-200 font-semibold mb-4">Your Todos</h2>
  <ul className="space-y-4">
    {todos.map((todo) => (
      <li
        key={todo.id}
        className="flex justify-between items-center bg-zinc-800 hover:bg-zinc-700 transition duration-200 px-4 py-3 rounded-lg shadow-sm"
      >
        <span className="text-white text-base">{todo.text}</span>
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition duration-200 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </li>
    ))}
  </ul>
</div>

    </>
  
  )
}

export default ToDo
