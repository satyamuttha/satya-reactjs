//Parent Component
import { useState } from "react";
import BB from "./BB.jsx";
function AA(){
    let [state,setState]=useState("");
    return(
        <div style={{padding:"50px"}}>
        <h2>A Component-Parent</h2>
        <br />
        <p>Child Data:{state}</p>
        <br />
        <hr />
        <br />
        <BB setData={setState}/>
        </div>
    );
}

export default AA;