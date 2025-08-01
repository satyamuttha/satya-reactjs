import React from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header  from "./components/header/Header.jsx";
import { BrowserRouter } from "react-router-dom";


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
<App />
</BrowserRouter>
); 
