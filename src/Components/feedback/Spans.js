import React from "react";
import styles from "./Spans.module.css";
import PropTypes from "prop-types";

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
Spans.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedbak: PropTypes.func.isRequired,
  positiveFeedback: PropTypes.func.isRequired
};
export default Spans;
