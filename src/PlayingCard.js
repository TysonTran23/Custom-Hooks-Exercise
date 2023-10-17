import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useToggleFlip from "./hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {

  //Custom Hook Component
  const [facingUp, setFacingUp] = useToggleFlip()

  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
  return (
    <img
      src={facingUp ? front : back}
      alt="playing card"
      onClick={setFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
