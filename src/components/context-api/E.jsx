import {useContext} from "react";
import myfirstContext from "./context";

function E(){
    let contextdata=useContext(myfirstContext);
    return(
        <div style={{padding:"20px"}}>
        <h3>E Component</h3>
        <br />
        <hr />
        <br />        
        <h3 style={{color:"green"}}>Data: {contextdata}</h3>
        
        </div>
    );
}

export default E;