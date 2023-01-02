import React from "react";
import "./Card.css"

const Card = ({ stance, name, obstacle, tutorial, id, key }) => {
  return (
    <section className="card">
      <p>{stance} {name} </p>
      <p>Obstacle: {obstacle} </p>
      <a href={tutorial}>Link to Tutorial</a>
    </section>
  )
}

export default Card