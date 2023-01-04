import React from "react";
import "./Card.css"

const Card = ({ stance, name, obstacle, tutorial, id, deleteTrick }) => {
  return (
    <section className="card">
      <p>{stance} {name} </p>
      <p>Obstacle: {obstacle} </p>
      <a href={tutorial}>Link to Tutorial</a>
      <button
        onClick={()=>deleteTrick(id)}
      >🗑</button>
    </section>
  )
}

export default Card