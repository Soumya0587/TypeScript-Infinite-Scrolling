import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";


interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    let Authenticate_Status= localStorage.getItem("Authenticated")
 

  if (!Authenticate_Status) {
    return <Navigate to="/" />;
  }

  

  return <>{children}</>;
};

export default PrivateRoute;
