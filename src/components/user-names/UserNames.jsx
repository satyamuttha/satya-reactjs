import { useState } from "react";
import "./UserNames.css";

function UserNames(){
    let [usernames,setUserNames]=useState(["Satya","Raju","Rani","Navya","Sailaja","Raghu","Srinivas"]);
    return(
        <div style={{padding:"50px"}}>
            <h2>User Names</h2>
            <ul>
            {
                usernames.map(function(username){
                    return(
                        <li>{username}</li>
                    );
                })
            }
            </ul>
        </div>
    );
}

export default UserNames;