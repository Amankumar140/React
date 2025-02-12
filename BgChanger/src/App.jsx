import {useState} from 'react'
function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor : color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 mb-5"> 
        <div className='fixed flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("Red")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-600 p-4px mr-2 ml-2'>Red</button>
          <button onClick={()=>setColor("Green")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-green-600 p-4px mr-2 ml-2'>Green</button>
          <button onClick={()=>setColor("#71717A")} className='outline-none px-4 py-1 rounded-full shadow-lg  bg-zinc-700 p-4px mr-2 ml-2'>Zinc</button>
          <button onClick={()=>setColor("Gray")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-gray-400 p-4px mr-2 ml-2'>gray</button>
          <button onClick={()=>setColor("cyan")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-cyan-600 p-4px mr-2 ml-2'>Cyan</button>
          <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-pink-500 p-4px mr-2 ml-2'>Pink</button>
          <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-orange-500 p-4px mr-2 ml-2'>Orange</button>
          <button onClick={()=>setColor("#14B8A6")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-teal-500 p-4px mr-2 ml-2'>Teal</button>
          <button onClick={()=>setColor("#0EA5E9")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-sky-500 p-4px mr-2 ml-2'>Sky</button>
          <button onClick={()=>setColor("#E11D48")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-rose-500 p-4px mr-2 ml-2'>Rose</button>
           
           
        </div>
      </div>
    </>
  )
}

export default App
