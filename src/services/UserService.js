import axios from "./customizeAxios";

export const fetchAllUser = () => {
  return axios.get("/api/users?page=2");
};
