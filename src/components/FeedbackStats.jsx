import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //Calculate ratings avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating / feedback.length;
  }, 0);

  average = average.toFixed(1).replace(/[.,]0$/, '')

  console.log(average);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
