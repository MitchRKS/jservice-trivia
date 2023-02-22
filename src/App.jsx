import { useState } from "react";
import "./App.css";
import { ClueCard } from "./Components/ClueCard.jsx";

function App() {
  const [clue, setClue] = useState(null);
  const [score, setScore] = useState(0);

  const getClue = async () => {
    try {
      const response = await fetch(`https://jservice.io/api/random?count=1`);
      const data = await response.json();
      setClue(data);
    } catch (error) {
      console.log(error);
    }
  };

  function upScore() {
    setScore(score + 100);
  }

  function downScore() {
    setScore(score - 100);
  }

  return (
    <div className="App">
      <h1 className="Header">Alek Trebex's Reverse Mortgage Sales Platform</h1>
      <p>Player Score: {score}</p>
      <button className="Button" onClick={upScore}>
        Add 100
      </button>
      <button className="Button" onClick={downScore}>
        Subtract 100
      </button>
      <br />
      <button className="Button" onClick={getClue}>
        Get a clue
      </button>
      <ClueCard clue={clue} />
    </div>
  );
}

export default App;
