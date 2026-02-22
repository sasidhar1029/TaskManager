import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Tasks from "./components/Tasks";
import CreateTask from "./components/CreateTask";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "dashboard" && <Dashboard />}
      {page === "tasks" && <Tasks />}
      {page === "create" && <CreateTask setPage={setPage} />}
    </div>
  );
}

export default App;