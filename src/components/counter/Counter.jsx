import './Counter.css';
import{useState} from 'react';

function Counter() {    
    //state=undefined if parameter is not passed
    var [state,setState]=useState(0); 

    //count=undefined if parameter is not passed
    var [count,setCount]=useState(100); 

    console.log("Re-rendering");
    const increaseCount =()=>{
        // state=state+1;
        // console.log(state); //1 2 3 ... in console and do no change in ui
        // //ie., only changes performed in state variable not in ui

        // setState(state+1);
        // console.log(state); //previous state value is displayed
        // //becasue setState() is Asynronous Function
        
        // setState(state+1); //1 - re-render
        // setState(state+2); //3 - re-render
        // setState(state+3); //6 - re-ender
        // //in ui i am expecting 6,12,18..., 
        // // but every time ui changes 3, 6, 9, ... it adds 3 only 
        // // because last setState(state+3) is only Re-rendering


        // setState(state+1);
        // setState(state+1);
        // setState(state+1); //this is only Re-rendering

        // setCount(count+1);
        // setCount(count+1); //this is only Re-rendering

        // function that is passed as argument to setState() is called //updater function
        //following is functional update

        setState((prevState)=>{ //0
            return prevState + 1; //1
        }); // 1- re-render
        setState((prevState)=>{ //1
            return prevState + 1; //2
        });// 2 -re-render

        //following is direct assignment, so it is incorrect pattern
        // does not use following
        // setState(state=state+1); // 1 -re-render
        // setState(state=state+1); // 2 -re-render
    };

    return (
    <div className="counter">
        <h2>Counter App in React</h2>
        <p>Count Value is-state : {state}</p>
        <p>Count Value is-count : {count}</p>
        <button onClick={increaseCount}>incCount</button>
    </div>
    );
}


export default Counter