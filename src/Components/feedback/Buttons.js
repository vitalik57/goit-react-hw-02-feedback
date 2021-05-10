import React from "react";
import styles from "./Buttonst.module.css";
const Buttons = ({ buttonGood, buttonneutral, buttonBad }) => {
  return (
    <div className={styles.feedbackButtons}>
      <button type="button" onClick={buttonGood}>
        Good
      </button>
      <button type="button" onClick={buttonneutral}>
        Neutral
      </button>
      <button type="button" onClick={buttonBad}>
        Bad
      </button>
    </div>
  );
};

export default Buttons;
