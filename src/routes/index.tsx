import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register/indesx";
import Login from "../pages/Login";
import Home from "../pages/Home";

export const RoutesMain: any = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
