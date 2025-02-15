import React,{useState} from "react";
import UserContext from "./userContext";



const UserContextProvider=({children})=>{ // children is like div whatever comes pass to next
    const [user,setUser]=useState(null); // if api call then call it here...
     
    return(
        <UserContext.Provider  value={{user,setUser}}> 
            {children}
        </UserContext.Provider>
    )

    // value passed for data ......
}

export default UserContextProvider