import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element :<About/>
//       },
//       {
//         path:'contact',
//         element :<Contact/>
//       }
//     ]
//   }
// ])

// another methods for routing..

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}>

      </Route>
    </Route>

     //  loader use for api call when mouse point on github here callback allow but not do..
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )