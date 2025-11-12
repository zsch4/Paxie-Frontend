import { Navigate } from "react-router-dom";

export const isLoggedIn = () => {
  return !!localStorage.getItem("authToken"); 
};


const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/admin/login" replace />;
  }

  return children; 
};

export default ProtectedRoute;
