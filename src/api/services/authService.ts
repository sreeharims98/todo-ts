import { TloginData } from "../../Types";
import axiosClient from "../index";

const login = (data: TloginData) => {
  return axiosClient.post("/user/login", data);
};
const logout = () => {
  return axiosClient.post("/user/logout");
};

const authService = {
  login,
  logout,
};

export default authService;
