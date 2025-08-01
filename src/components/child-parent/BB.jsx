//Child Component
import {useState} from "react";

function BB({setData}){
    let [childData,setChildData]=useState("Satya from Child");
    return(
        <div>
            <h2>BB Component-Child</h2>
            <br />
            <button 
            onClick={()=>{
                setData(childData);
            }}
            >
                Pass Data to Parent               
            </button>
        </div>
    );
}

export default BB;