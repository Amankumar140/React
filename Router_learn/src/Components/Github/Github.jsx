import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"; // for api fetching due to loading data..
function Github(){
    // const [data,setData]=useState([])
    // useEffect(()=>{
        
    //     fetch('https://api.github.com/users/Amankumar140')
    //     .then(res=>res.json())
    //     .then((data)=>{
    //         setData(data)
    //     })
    // },[])

    const data= useLoaderData()

    return(
        <div className="text-center m-4 bg-gray-600 text-white"> Github followers {data.followers}
        <img src={data.avatar_url}  alt="git picture " width="300px" height="300px"/>
        </div>
    )
}

export default Github

export  const githubInfoLoader=async()=>{
     const response=await fetch('https://api.github.com/users/Amankumar140')
     return response.json();
}