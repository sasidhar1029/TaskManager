import axios from "axios";

const API = "http://localhost:9090/api/tasks";

export const getTasks = () => axios.get(API);
export const createTask = (data) => axios.post(API, data);
export const deleteTask = (id) => axios.delete(`${API}/${id}`);