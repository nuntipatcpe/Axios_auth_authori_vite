import { useState, useEffect } from "react";
import "./App.css";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import Aut from "../component/Aut";

import PublicRoutes from "./routers/Public.routes";
import ProtectedRoutes from "./routers/Protected.routes";

import { Routes, Route } from "react-router-dom";
function App() {
  // const [token, setToken] = useState(localStorage.getItem('token'));

  // useEffect(()=>{
  // //   if(token){
  // //     round('/');
  // //     // console.log("dsds")
  // // }
  // },[token]);

  // if(localStorage.getItem('token')){
  //   return (
  //     <div className="app">

  //       <Routes>

  //       </Routes>

  //     </div>
  // );
  // }

  return (
    <div className="app">
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Aut>
                <Home/>
            </Aut>
          }
        /> */}

        {/* Public routes */}
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/" element={<Login/>} />   
          <Route path="*" element={<Login/>} />   
        </Route>

        {/* Protected routes */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home/>} />   
          <Route path="*" element={<>404 | This page could not be found.</>} />
        </Route>

      
      </Routes>
    </div>
  );
}

export default App;
