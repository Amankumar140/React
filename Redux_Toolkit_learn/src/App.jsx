import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddToDo'
import ToDo from './components/ToDo'
import { Provider } from 'react-redux'
import {store} from './app/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Provider store={store}>
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-start py-10 px-4">
    <h1 className="text-4xl font-bold text-purple-400 mb-8 drop-shadow-lg">
      Learn Redux Toolkit
    </h1>
    <div className="w-full max-w-md space-y-6">
      <AddToDo />
      <ToDo />
    </div>
  </div>
</Provider>


  
  )
}

export default App
