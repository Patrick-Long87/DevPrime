import api from "../data/config.js";

export const getAllUsers = async () => {
  const usersResponse = await api.get("/users");
  const data = usersResponse.data;
  return data;
};
