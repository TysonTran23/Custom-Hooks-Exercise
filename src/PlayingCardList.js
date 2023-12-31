import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */

function CardTable() {
  //Custom Hook Component
  const [cardData, addCardData] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );

  // const [cards, setCards] = useState([]);
  // const addCard = async () => {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  // };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCardData("")}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cardData.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
