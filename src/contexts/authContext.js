import React, { useEffect, useState } from "react";
import axios from "axios";
import { AUTH_API } from "../helpers/API";

export const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  async function signIn(username, password, navigate) {
    let formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);

    try {
      let res = await axios.post(
        `${AUTH_API}/api/v1/dj-rest-auth/login/`,
        formData
      );
      navigate("/");

      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("email", username);
      setUser(username);
    } catch (e) {
      setError("*Убедитесь в правильности введенных даннх!");
    }
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
  }
  return (
    <authContext.Provider value={{ signIn, user, error, logout }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
