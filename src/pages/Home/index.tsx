import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import todoService from "../../api/services/todoService";
import { Navbar } from "../../components/NavBar/Navbar";
import { Table } from "../../components/Table/Table";
import { TTodoPostData } from "../../Types";

const Home = () => {
  const [task, setTask] = useState("");

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const getToDoQuery = useQuery(["todos"], todoService.getTodoList);
  const postToDoQuery = useMutation(
    () => {
      const data: TTodoPostData = { description: task };
      return todoService.addTodoTask(data);
    },
    {
      onSuccess: () => {
        setTask("");
        queryClient.invalidateQueries(["todos"]);
      },
    }
  );

  const submitTask = () => {
    if (Boolean(task)) {
      postToDoQuery.mutate();
    }
  };

  return (
    <div>
      <Navbar />
      <h1>ToDo List</h1>
      <label>
        <input
          className="border"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </label>
      <button
        onClick={submitTask}
        disabled={task && !postToDoQuery.isLoading ? false : true}
      >
        {postToDoQuery.isLoading ? "Adding..." : "Add Task"}
      </button>
      <br />
      <Table getToDoQuery={getToDoQuery} />
    </div>
  );
};

export default Home;
