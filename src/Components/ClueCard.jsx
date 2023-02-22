import { useState } from "react";
import React from "react";
import "../App.css";
export function ClueCard({ clue }) {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const handleClick = () => {
    showAnswer ? setShowAnswer(false) : setShowAnswer(true);
  };

  const Loaded = () => {
    return (
      <>
        <p>Category: {clue[0].category.title}</p>
        <p>Points: {clue[0].value}</p>
        <h5 className="Question">Question: {clue[0].question}</h5>
        <div onClick={handleClick}>
          {" "}
          Answer:
          {showAnswer ? clue[0].answer : <p>Click to Reveal</p>}{" "}
        </div>
      </>
    );
  };
  return clue ? <Loaded /> : <></>;
}
