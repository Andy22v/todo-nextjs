import { useContext } from "react";
import { stateContext } from "@/state/context";
import "./Todo.module.css";

const Todo = ({ todo }) => {
  const { dispatch } = useContext(stateContext);

  const onHandleDelete = () =>
    dispatch({ type: "REMOVE_TODO", payload: todo.id });

  return (
    <div className="Todo">
      <h3>{todo.content}</h3>
      <button onClick={onHandleDelete}>X</button>
    </div>
  );
};

export default Todo;
