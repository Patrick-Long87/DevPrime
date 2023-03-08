import React, { createContext, useContext, useState } from "react";
import { getAllPosts } from "../fetch/getAllPosts.js";
import { useQuery } from "@tanstack/react-query";

const PostsContext = createContext({});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const formatResponse = (res) => {
    return JSON.stringify(res);
  };

  useQuery(["posts"], getAllPosts, {
    onSuccess: (res) => setPosts(res),
    onError: (err) => setError(formatResponse(err.response?.data || err)),
  });

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostsContext);
};
