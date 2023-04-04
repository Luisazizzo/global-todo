import { useEffect, useContext } from "react";
import { Context } from "../../store";
import { GET } from "../../utils/http";
import Todo from "../todo/Todo";
import styles from "./index.module.scss";

const TodoList = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    GET("todos").then((res) => {
      dispatch({ type: "SET_TODO_LIST", payload: res.todos });
    });
  }, []);

  return (
    <div className={styles.TodoList}>
      {state.todoListData.map((item) => (
        <Todo data={item} key={item.id} />
      ))}
    </div>
  );
};
export default TodoList;
