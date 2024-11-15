import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem("userInfo", JSON.stringify(user));
    setUserInfo(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUserInfo(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userInfo, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
