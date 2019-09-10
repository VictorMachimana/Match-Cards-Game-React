import React, { useState, useEffect } from "react";
import Board from "./components/board";
import { Button } from "react-bootstrap";

import initializeDeck from "./deck";

export default function TheGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  /*---set the dimensions of our board so its responsive with screen size*/
  const [dimension, setDimension] = useState(400);

  /*--board logic set state*/
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  /*--useEffect method and make sure is only rendered once*/
  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    /*--images preloading--*/
    preloadImages();
  }, cards);

  /*---resize on resizeEventListener--change when page is resized---*/
  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);
    /*--use return value to clean up on dismount */
    return () => window.removeEventListener("resize", resizeListener);
  });

  const handleClick = id => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 2000);
      }
    }
  };

  /*preloading images*/
  const preloadImages = () => {
    cards.map(card => {
      const src = `/img/${card.type}.png`;
      new Image().src = src;
    });
  };

  /*reset function */
  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = id => flipped.includes(id);

  const isMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

  /*resizing and dimensions of the board functionality */
  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  const restartGame = e => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div>
      <h2>Can you remember where cards are?</h2>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
      <br />
      <Button variant="success" size="lg" onClick={restartGame}>
        <span>Reload</span>
      </Button>
      <br />
      <br />
    </div>
  );
}
