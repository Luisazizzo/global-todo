import { useContext, useEffect, useState } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";

const Modal = () => {
  // const [input, setInput] = useState("");
  // const [inputImage, setInputImage] = useState("");
  // const [inputName, setInputName] = useState("");
  const { state, dispatch } = useContext(Context);

  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  const onChangeName = (e) => {
    dispatch({ type: "SET_TODO_NAME", payload: e.target.value });
  };
  const onChangeImg = (e) => {
    dispatch({ type: "SET_TODO_IMAGE", payload: e.target.value });
  };
  const onChangeTodo = (e) => {
    dispatch({ type: "SET_TODO_TODO", payload: e.target.value });
  };
  useEffect(() => {
    console.log(state.todoListData);
  }, [state]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_NEW_TODO",
      payload: state.listTodo,
    });
  };

  return (
    <div className={styles.Modal}>
      <p onClick={toggleModal}>x</p>
      <form onSubmit={onSubmit}>
        <input
          value={state.listTodo.username}
          onChange={onChangeName}
          type="text"
          placeholder="userName"
          required
        />
        <input
          value={state.listTodo.image}
          onChange={onChangeImg}
          type="text"
          placeholder="Photo Url..."
          required
        />
        <input
          value={state.listTodo.todo}
          onChange={onChangeTodo}
          type="text"
          placeholder="Add new todo"
          required
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Modal;
