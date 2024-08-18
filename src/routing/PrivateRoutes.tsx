import useAuth from "./hooks/useAuth";
import {Navigate, Outlet} from "react-router-dom";

function PrivateRoutes() {
  const {user} = useAuth();

  if (!user)
    return <Navigate to="/login"/>

  return <Outlet/>
}

export default PrivateRoutes;