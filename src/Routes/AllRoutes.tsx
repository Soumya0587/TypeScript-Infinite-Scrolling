import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoutes"
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>}></Route>
    </Routes>
  );
};

export default AllRoutes;
