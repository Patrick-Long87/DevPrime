import api from "../data/config.js";

export const getAllComments = async () => {
  const commentsResponse = await api.get("/comments");
  const data = commentsResponse.data;
  return data;
};
