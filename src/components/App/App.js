import { Component } from 'react';
import './App.css';
import getData from "../../apiCalls"
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    getData()
      .then(data=>this.setState({tricks: data}))
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <CardContainer tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;