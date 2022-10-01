import { TTodoPostData } from "../../Types";
import axiosClient from "../index";

const getTodoList = () => {
  return axiosClient.get("/task", { params: { limit: 10 } });
};
const addTodoTask = (data: TTodoPostData) => {
  return axiosClient.post("/task", data);
};
const delTodoTask = (id: string) => {
  return axiosClient.delete(`/task/${id}`);
};
const updateTodoTask = (id: string, data: { completed: boolean }) => {
  return axiosClient.put(`/task/${id}`, data);
};

const todoService = {
  getTodoList,
  addTodoTask,
  delTodoTask,
  updateTodoTask,
};

export default todoService;
