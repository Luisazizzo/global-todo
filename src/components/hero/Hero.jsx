import { useContext } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";

const Hero = () => {
  const { dispatch } = useContext(Context);

  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  return (
    <div className={styles.Hero}>
      <button onClick={toggleModal}>+</button>
      <h1>Hello!</h1>
      <p>Today's {new Date().toLocaleString("en-EN", { weekday: "long" })}</p>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  );
};
export default Hero;
