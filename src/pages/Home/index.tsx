import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/NavBar/Navbar";
import { Table } from "../../components/Table/Table";

const Home = () => {
  const [task, setTask] = useState("");

  useEffect(() => {
    // getTodoList();
  }, []);

  const submitTask = () => {
    try {
      // dispatch(addTodoTask(task)).unwrap();
      setTask("");
    } catch (error) {}
  };

  return (
    <div>
      {/* <Navbar user={user} logout={() => dispatch(logout())} /> */}
      <h1>ToDo List</h1>
      <label>
        <input
          className="border"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </label>
      <button onClick={submitTask} disabled={task ? false : true}>
        Add Task
      </button>
      <br />
      <Table />
    </div>
  );
};

export default Home;
