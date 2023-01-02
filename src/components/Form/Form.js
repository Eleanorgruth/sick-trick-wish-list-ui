import React, { Component } from "react";
import "./Form.css"

class Form extends Component {
  constructor() {
    super()
    this.state = {
      stance:'', 
      name: '',
      obstacle: '',
      tutorial: ''
    }
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    return (
      <form>
        <select name="stance" id="stance">
          <option value="chooseStance">Choose your Stance</option>
          <option value="regular">Regular</option>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>
        <input
          type="text"
          placeholder="Name of Trick"
          name="name"
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <select name="obstacle" id="obstacle">
          <option value="chooseObstacle">Choose your Obstacle</option>
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
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
        />
        <button>
          Send It!
        </button>
      </form>
    )
  }
}

export default Form