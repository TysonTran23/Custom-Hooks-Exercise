import React, { useState } from "react";
import "./PokemonCard.css";
import useToggleFlip from "./hooks";

/* Renders a single pokemon card. */
function PokemonCard({ front, back, name, stats }) {
  //Custom Hook Component
  const [facingUp, setFacingUp] = useToggleFlip();

  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp((isUp) => !isUp);
  // };
  return (
    <div onClick={setFacingUp} className="PokemonCard Card">
      {facingUp ? (
        <div className="PokemonCard-front">
          <img src={front} alt={`{name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map((stat) => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={back} alt={`{name} back`} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
