import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { fetchAuthorization } from "../utils/fetchAuthorization";

function Aut({ children }) {
  const round = useNavigate();

  const token = localStorage.getItem("token");
  
  //check token expire
  useEffect(() => {
    if(token!==null){
      fetchAuthorization
        .get("https://www.mecallapi.com/api/auth/user")
        .catch((err) => round("/login"));
    }
  }, []);


  return token ? children : <Navigate to="/login" />;

}

export default Aut;
