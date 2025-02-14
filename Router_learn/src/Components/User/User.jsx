import React from "react";
import { useParams } from "react-router-dom"; // use for getting data like username...

function User(){
    const {userid}=useParams()
    return (
        <div className="bg-gray-500 bg-center">User : {userid}</div>
    )
}
export default User