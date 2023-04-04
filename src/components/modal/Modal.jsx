import { useContext, useState } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";

const Modal = () => {
  const [input, setInput] = useState("");
  const { state, dispatch } = useContext(Context);

  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_NEW_TODO",
      payload: {
        id: state.todoListData.lenght + 1,
        todo: input,
        completed: false,
        userId: 26,
      },
    });
  };

  return (
    <div className={styles.Modal}>
      <p onClick={toggleModal}>x</p>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={onChange}
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
