import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [username,setUsername]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log( username)
    setUsername('')
  }

  const array=  [
    {
      "id": 1,
      "name": "Alice Johnson",
      "age": 29,
      "profession": "Software Engineer"
    },
    {
      "id": 2,
      "name": "Brian Lee",
      "age": 35,
      "profession": "Graphic Designer"
    },
    {
      "id": 3,
      "name": "Clara Smith",
      "age": 41,
      "profession": "Data Scientist"
    },
    {
      "id": 4,
      "name": "David Kim",
      "age": 24,
      "profession": "Marketing Specialist"
    },
    {
      "id": 5,
      "name": "Eva Patel",
      "age": 32,
      "profession": "Civil Engineer"
    }
  ]

  return (
    <div>
        {
          array.map(function(e,idx){
            return (<Card key={idx} name={e.name} id={e.id} profession={e.profession}  age={e.age}/>)
          })
          
        
        }
    </div>
  )
}

export default App
