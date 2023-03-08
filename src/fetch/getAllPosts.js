import api from "../data/config.js";

export const getAllPosts = async () => {
  const postResponse = await api.get("/posts");
  const data = postResponse.data;
  return data;
};
