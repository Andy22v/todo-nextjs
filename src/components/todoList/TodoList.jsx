import Todo from "../todo";
import { stateContext } from "@/state/context";
import { useContext } from "react";

const TodoList = () => {
  const initialState = useContext(stateContext);

  return (
    <div>
      <h1>Todo List</h1>
      <div className="TodoList">
        {initialState &&
          initialState.map((todo) => (
            <Todo key={todo.id} todo={todo.todo} />
          ))}{" "}
      </div>
    </div>
  );
};

export default TodoList;
