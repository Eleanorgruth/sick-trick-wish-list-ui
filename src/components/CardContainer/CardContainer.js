import React from "react";
import "./CardContainer.css"
import Card from "../Card/Card"

const CardContainer = ({ tricks }) => {
  const tricksArray = tricks.map(trick => {
    return (
      <Card
        stance={trick.stance}
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
        id={trick.id}
        key={trick.id}
      />
    )
  })
  return (
    <div className="card-container">
      {tricksArray}
    </div>
  )
}

export default CardContainer