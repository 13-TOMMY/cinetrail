import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (!storedUser) {
      localStorage.setItem("userInfo", "");
    } else {
      setUser(JSON.parse(storedUser));
    }
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}

