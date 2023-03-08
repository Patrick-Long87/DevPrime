import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../fetch/getAllUsers.js";
import api from "../data/config.js";

const UsersContext = createContext({});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const formatResponse = (res) => {
    return JSON.stringify(res);
  };

  useQuery(["users"], getAllUsers, {
    onSuccess: (res) => setUsers(res),
    onError: (err) => setError(formatResponse(err.response?.data || err)),
  });

  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
};

export const useUsers = () => {
  return useContext(UsersContext);
};
