import './ImageComp.css';
import { useState } from 'react';

function ImageComp()
{
    let [url,setUrl]=useState("https://media.licdn.com/dms/image/v2/D4E12AQFAnM7JNyFDQg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708148800306?e=2147483647&v=beta&t=pcv3nQmuGNO--DYXy4h9jVh8cUdkYEaArH8927o3BTE");

    let [title,setTitle]=useState("React")

    const changetoAngular=()=>{
        setUrl("https://miro.medium.com/v2/resize:fit:1400/1*exqug2FOuGIwh_SEWWbKZA.png");

        setTitle("Angular");
    }
    const changetoReact=()=>{
        setUrl("https://media.licdn.com/dms/image/v2/D4E12AQFAnM7JNyFDQg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708148800306?e=2147483647&v=beta&t=pcv3nQmuGNO--DYXy4h9jVh8cUdkYEaArH8927o3BTE");

        setTitle("React");
    }
    return (
        <div id='ImageComp'>
        <h2>{title}</h2>
        <img src={url} 
        alt="image" 
        width="250px" 
        height="200px" />
        <br />
        <br />
        <button onClick={changetoReact}>changetoReact</button>
        <button onClick={changetoAngular}>changetoAngular</button>
        </div>
    );
}

export default ImageComp;