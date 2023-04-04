import { Context } from "./store";
import { useReducer, useState } from "react";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Modal from "./components/modal";
import Hero from "./components/hero";
import TodoList from "./components/todoList";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <TodoList />
        {state.isModalVisible && <Modal />}
      </Context.Provider>
    </div>
  );
}

export default App;
