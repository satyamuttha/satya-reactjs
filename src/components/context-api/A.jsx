import { useState } from "react";
import B from "./B.jsx";
import myfirstContext from "./context.js";
function A() {
    let [state, setState] = useState(null);
    return (
        <div style={{ padding: "50px" }}>
            <h3>A Component</h3>
            <h4>using context api</h4>
            <button
                onClick={() => {
                    setState("Welcome to Satya");
                }}
            >Pass Data to Child Component</button>
            <br />
            <br />
            <hr />
            <br />
            
                
                    <myfirstContext.Provider value={state}>
                        <B />
                    </myfirstContext.Provider>
                
            
        </div>
    );
}

export default A;