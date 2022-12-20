import { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import React from "react";

interface iAuthContext {
  children: React.ReactNode;
}
export interface iUser {
  id: string;
  name: string;
  email: string;
}
export interface iRegister {
  accessToken: string;
  user: iUser;
}
export interface iDataRegister {
  name: string;
  email: string;
  password: string;
}
export interface iDataLogin {
  email: string;
  password: string;
}
export interface iValuesRegister {
  registerRequisition: (data: iDataRegister) => void;
  loginRequisition: (data: iDataLogin) => void;
  handleRedirectHome: () => void;
  handleRedirectLogin: () => void;
}

export const AuthContext = createContext<iValuesRegister>(
  {} as iValuesRegister
);

const AuthProvider = ({ children }: iAuthContext) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const handleRedirectHome = () => {
    navigate("/home");
  };
  const handleRedirectLogin = () => {
    navigate("/");
  };

  const registerRequisition = (data: iDataRegister) => {
    api
      .post("/users", data)
      .then((response) => {
        console.log(response.data);
        setTimeout(() => {
          handleRedirectLogin();
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginRequisition = (data: iDataLogin) => {
    api
      .post("/login", data)
      .then((response) => {
        console.log(response.data);

        localStorage.clear();
        localStorage.setItem("authToken", response.data.accessToken);
        setTimeout(() => {
          handleRedirectHome();
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AuthContext.Provider
      value={{
        registerRequisition,
        loginRequisition,
        handleRedirectHome,
        handleRedirectLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
