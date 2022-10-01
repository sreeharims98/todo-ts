import {
  useMutation,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import todoService from "../../api/services/todoService";
import { TTodoData } from "../../Types";

interface ITable {
  getToDoQuery: UseQueryResult<AxiosResponse<any, any>, unknown>;
}

export const Table = ({ getToDoQuery }: ITable) => {
  const { data, isLoading, isError } = getToDoQuery;
  const todoList = data?.data?.data;

  // Access the client
  const queryClient = useQueryClient();

  //delete query
  const deleteToDoQuery = useMutation(
    (id: string) => {
      return todoService.delTodoTask(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
      onError: () => {
        alert("ToDo deletion failed");
      },
    }
  );

  //update query
  const updateToDoQuery = useMutation(
    (value: { id: string; status: boolean }) => {
      const data = { completed: !value?.status };
      return todoService.updateTodoTask(value?.id, data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
      onError: () => {
        alert("ToDo completion failed");
      },
    }
  );

  if (isLoading) return <h2>Loading...</h2>;
  else if (isError) return <h2>An Error Occured</h2>;
  else
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoList?.map((task: TTodoData) => (
            <tr key={task._id}>
              <td
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.description}
              </td>
              <td>
                <button
                  onClick={() =>
                    updateToDoQuery.mutate({
                      id: task._id,
                      status: task.completed,
                    })
                  }
                >
                  {task.completed ? "Incomplete" : "Completed"}
                </button>
                <button onClick={() => deleteToDoQuery.mutate(task._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};
