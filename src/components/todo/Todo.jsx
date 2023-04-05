import { useState, useContext } from "react";
import { Context } from "../../store";
import { FiCheck } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import styles from "./index.module.scss";

const Todo = ({ data }) => {
  const { dispatch } = useContext(Context);

  const [completed, setCompleted] = useState(data.completed);

  const toggle = () => {
    setCompleted((prev) => !prev);
  };

  const deleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: data.id });
  };

  return (
    <div
      className={styles.Todo}
      style={{ background: `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)` }}
    >
      <div className={styles.info}>
        <img src={data.image} alt={data.username} />
        <div onClick={toggle} className={styles.completed}></div>
        {completed && (
          <FiCheck onClick={toggle} className={styles.isCompleted} />
        )}
      </div>
      <div className={styles.user}>
        <p>{data.username}</p>
        <p className={`${completed && styles.decoration}`}>{data.todo}</p>
        <HiOutlineTrash onClick={deleteTodo} className={styles.remove} />
      </div>
    </div>
  );
};
export default Todo;
