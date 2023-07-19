import Todo from "../todo";
import { stateContext } from "@/state/context";
import { useContext } from "react";
import { useState } from "react";
import "./TodoList.module.css";

const TodoList = () => {
  const { state, dispatch } = useContext(stateContext);
  const [addTask, setAddTask] = useState("");
  console.log(state);

  const onHandleTask = (e) => {
    setAddTask(e.target.value);
  };

  const onHandleTodo = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_NEW_TODO",
      payload: {
        id: Math.floor(Math.random() * 20),
        content: addTask,
        completed: false,
      },
    });
    setAddTask("");
  };

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <form onSubmit={onHandleTodo}>
        <input
          type="text"
          name="content"
          value={addTask}
          onChange={onHandleTask}
        />
        <input type="submit" />
      </form>
      <div>
        {state?.todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
