import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Register from "../pages/Register/indesx";
import Login from "../pages/Login";
import Home from "../pages/Home";

export const RoutesMain: any = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
  });

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    );
  }
};
