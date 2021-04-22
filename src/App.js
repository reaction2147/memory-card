import "./styles/App.css";
import Card from "./components/Card";
import Footer from "./components/Footer"
import { useEffect, useState } from "react";
import Characters from "./components/Characters"
import randomiseCard from "./helpers/CardShuffle";
import Scoreboard from "./components/Scoreboard"
import { Button } from '@material-ui/core';

const App = () => {

const [currentScore, setCurrentScore] = useState(() => 0)
const [cardsClicked, setCardsClicked] = useState(() => []) 
const [gameOver, setGameOver] = useState(() => false)

//Update cardsclicked array, when clicking on Card component
const updateCardsClicked = (newCard) => {
  if(!gameOver) {
    setCardsClicked((cardsClicked) => {
      return (cardsClicked.concat([newCard]))
    })
  }
}

//Logic to update current score and game over status on cardsclicked array change

useEffect(() => {
setCurrentScore(new Set(cardsClicked).size)
if(cardsClicked.length !== new Set(cardsClicked).size) {
  setGameOver(true)
}
}, [cardsClicked])

//Reset the game and the score

// reset all game data
const Reset = () => {
  setGameOver(false);
  setCurrentScore(0);
  setCardsClicked([]);
};

//Display the cards using data from Card.js

const DisplayCards = () => {
  return Characters.map((char => {
      return (
          <Card 
          key={char.id}
          name={char.name}
          src={char.src}
          id={char.id}
          onClick={ () => {updateCardsClicked(char.id)
          if(!gameOver)  {
            randomiseCard(Characters)
          }  
        }}
          />
      )
  }))
}

  return (
    <div>
      
      {gameOver ? <h1 className="gameover">GAME OVER</h1> : null}
      {gameOver ? <Button className="reset-btn" variant="contained" onClick={Reset}>RESET</Button> : null }
      <Scoreboard currentscore ={currentScore}/>
      <div className="cards-container">{DisplayCards()}</div>
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
