import axios from "./customizeAxios";

export const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

export const postCreateUser = (name, job) => {
  return axios.post("/api/users", { name, job });
};

export const updateUser = (name, job) => {
  return axios.put("/api/users/2", { name, job });
};
