import React, { useState, useEffect } from "react";

const Scoreboard = ({ currentscore }) => {
  const [bestscore, setBestScore] = useState(() => 0);
  

  useEffect(() => {
    if (currentscore > bestscore) {
      setBestScore(currentscore);
    }
  }, [currentscore]);

  return (
    <div className="scoreboard">
      <div className="current-score">Current Score: {currentscore}</div>
      <div className="best-score">Best Score: {bestscore}</div>
    </div>
  );
};

export default Scoreboard;
