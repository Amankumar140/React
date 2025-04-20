import axios from 'axios'
import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  
   const [data, setData] = useState([]);
  const getData=async()=>{
   const response= await axios.get("https://picsum.photos/v2/list")
    setData(response.data)
   //console.log(data)
  }
  

  return (
    <div className="min-h-screen bg-black p-6">
  <h1 className="text-3xl font-bold text-center text-white mb-6">Hello Alaric</h1>

  <div className="flex justify-center mb-8">
    <button 
      onClick={getData}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
    >
      Get Data
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data.map((ele, idx) => (
      <Card key={idx} img={ele.download_url} name={ele.author} />
    ))}
  </div>
</div>

  )
}

export default App
