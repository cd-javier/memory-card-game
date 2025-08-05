import './Game.css';
import { useState, useRef, useEffect } from 'react';
import shuffle from './utils/shuffle';
import loadDeck from './utils/loadDeck';

import Card from './Card';

export default function Game({ originalDeck }) {
  const [deck, setDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const log = useRef([]);

  useEffect(() => {
    loadDeck(shuffle(originalDeck), setDeck);
  }, [originalDeck]);

  function handleClick(keyword) {
    setDeck((deck) => shuffle(deck));

    if (!log.current.includes(keyword)) {
      // Checks that the card hasn't been clicked
      log.current.push(keyword); // Adds it to the log
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore > highScore) {
          // Calculates the high score
          setHighScore(newScore);
        }
        return newScore; // Increments the score
      });
    } else {
      log.current = []; // If it has already been clicked, it restarts
      setScore(0);
    }
  }

  return (
    <div className="game">
      <div className="score">
        Score: {score} | High Score: {highScore}
      </div>
      <div className="card-grid">
        {deck.map((card) => (
          <Card card={card} key={card.keyword} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}
