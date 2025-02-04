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
  clearInputs = () => {
    this.setState({stance:'', name: '', obstacle: '', tutorial: ''})
  }
  submitIdea = event => {
    event.preventDefault()
    const newTrick = {
      id: Date.now(),
      ...this.state
    }
    this.props.addTrick(newTrick)
    this.clearInputs()
  }
  render() {
    return (
      <form className="form">
        <select name="stance" id="stance" onChange={event => this.handleChange(event)}>
          <option value="">Choose your Stance</option>
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
        <select name="obstacle" id="obstacle" onChange={event => this.handleChange(event)}>
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
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.submitIdea(event)}>
          Send It!
        </button>
      </form>
    )
  }
}

export default Form