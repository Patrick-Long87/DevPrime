import React, { createContext, useContext, useState } from "react";
import { getAllComments } from "../fetch/getAllComments.js";
import { useQuery } from "@tanstack/react-query";

const CommentsContext = createContext({});

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  const formatResponse = (res) => {
    return JSON.stringify(res);
  };

  useQuery(["comments"], getAllComments, {
    onSuccess: (res) => setComments(res),
    onError: (err) => setError(formatResponse(err.response?.data || err)),
  });

  return (
    <CommentsContext.Provider value={{ comments }}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useComments = () => {
  return useContext(CommentsContext);
};
