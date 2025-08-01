import "./App.css";
import Nav from"./components/nav/Nav.jsx";
import Home from "./components/home/Home.jsx";
import Products from "./components/products/Products.jsx";
import AllProducts from "./components/allproducts/AllProducts.jsx";
import Counter from "./components/counter/Counter.jsx";
import Counter2 from "./components/counter/Counter2.jsx";
import ImageComp from "./components/imagecomp/ImageComp.jsx";
import UserNames from "./components/user-names/UserNames.jsx";

import Electronics from "./components/products/categories/electronics/Electronics.jsx";

import Jewelery from "./components/products/categories/jewelery/Jewelery.jsx";

import MensClothing from "./components/products/categories/mensclothing/MensClothing.jsx";

import WomensClothing from "./components/products/categories/womensclothing/WomensClothing.jsx";


import PageNotFound from "./components/pagenotfound/PageNotFound.jsx";
// import A from "./components/parent-child/A.jsx";
import AA from "./components/child-parent/AA.jsx";
import A from "./components/context-api/A.jsx";

import { Route, Routes } from "react-router-dom";

function App() {
  return (        
    <div className="app">     
      <Nav />  
      <A  />

      
      {/* <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />}>
        <Route path="electronics" element={<Electronics />} />
        <Route path="jewelery" element={<Jewelery />}/>
        <Route path="mensclothing" element={<MensClothing />}/>
        <Route path="womensclothing" element={<WomensClothing />} />
      </Route>
      
      <Route path="/allproducts" element={<AllProducts />} />

      <Route path="/counter" element={<Counter />} />   
      <Route path="/counter2" element={<Counter2 />} />   
      <Route path="/imagecomp" element={<ImageComp />} /> 
      <Route path="/usernames" element={<UserNames />} />  
      
      <Route path="*" element={<PageNotFound />} />   
      </Routes>       */}
    </div>      
  );
}

export default App;
