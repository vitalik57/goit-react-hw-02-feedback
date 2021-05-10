import React from "react";
import styles from "./Spans.module.css";
const Spans = ({ good, neutral, bad, totalFeedbak, positiveFeedback }) => {
  return (
    <>
      <span>Good{good}</span>
      <span>Neutral{neutral}</span>
      <span>Bad{bad}</span>
      <span>Total{totalFeedbak()}</span>
      <span>Positive feedback:{positiveFeedback()}%</span>
    </>
  );
};

export default Spans;
