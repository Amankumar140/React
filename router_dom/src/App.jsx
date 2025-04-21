import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  

  return (
    <>
      <div className='bg-black text-white'>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="/product" element={<Product/>} ></Route>
      </Routes>
      </div>
    </>
      
  )
}

export default App
