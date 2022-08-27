import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = (props) => {
  const auth = localStorage.getItem("token");
  console.log("ProtectedRoutes");
  return auth ? <Outlet /> : < Navigate to="/login" /> ;
};

export default ProtectedRoutes;
