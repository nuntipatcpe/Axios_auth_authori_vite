import { Navigate, Outlet } from "react-router-dom";


const PublicRoutes = (props) => {
  const auth = localStorage.getItem("token");
  console.log("PublicRoutes");
  return auth ?  <Navigate to="/home" />:<Outlet /> ;
};

export default PublicRoutes;
