import { Component } from 'react';
import './App.css';
import { getData, postData, deleteData } from "../../apiCalls"
import CardContainer from '../CardContainer/CardContainer';
import Form from '../Form/Form'

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
  addTrick = (newTrick) => {
    postData(newTrick)
      .then(data=> this.setState({ tricks: [...this.state.tricks, data] }))
  }
  deleteTrick = (id) => {
    deleteData(id)
      .then(data=>this.setState({tricks: data}))
  }
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <CardContainer tricks={this.state.tricks} deleteTrick={this.deleteTrick}/>
      </div>
    );
  }
}

export default App;