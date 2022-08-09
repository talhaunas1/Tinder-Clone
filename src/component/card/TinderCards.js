import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "../../axios.js";

function TinderCards() {
  useEffect(() => {
    async function getData() {
      const result = await axios.get("tinder/cards");
      // console.log(result.data);
      setPeople(result.data);
    }

    getData();
  }, []);

  const [people, setPeople] = useState([]);

  const swiped = (direction, nametoDelete) => {
    console.log("removing" + nametoDelete);
  };

  const outOffFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="TinderCard">
      <div className="tindercards_container">
        {people.map((person) => (
          // <h1> {person.name} </h1>
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOffFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
