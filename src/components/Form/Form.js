import React, { useState } from "react";
import "./Form.css"

const Form = (props) => {
  const [stance, updateStance] = useState('')
  const [name, updateName] = useState('')
  const [obstacle, updateObstacle] = useState('')
  const [tutorial, updateTutorial] = useState('')

  const clearInputs = () => {
    updateStance('')
    updateName('')
    updateObstacle('')
    updateTutorial('')
  }
  const submitIdea = event => {
    event.preventDefault()
    const newTrick = {
      stance,
      name,
      obstacle,
      tutorial
    }
    console.log("New Trick", newTrick)
  props.addTrick(newTrick)
  clearInputs()
  }
    return (
      <form className="form">
        <select name="stance" id="stance" onChange={event => updateStance(event.target.value)}>
          <option value="">Choose your Stance</option>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>
        <input
          type="text"
          placeholder="Name of Trick"
          name="name"
          value={name}
          onChange={event => updateName(event.target.value)}
        />
        <select name="obstacle" id="obstacle" onChange={event => updateObstacle(event.target.value)}>
          <option value="">Choose your Obstacle</option>
          <option value="flatground">Flatground</option>
          <option value="ledge">Ledge</option>
          <option value="rail">Rail</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select>
        <input
          type="text"
          placeholder="Link to Tutorial"
          name="tutorial"
          value={tutorial}
          onChange={event => updateTutorial(event.target.value)}
        />
        <button onClick={event => submitIdea(event)}>
          Send It!
        </button>
      </form>
    )
}

export default Form