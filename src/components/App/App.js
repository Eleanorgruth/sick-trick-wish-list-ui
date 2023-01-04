import React, {useState, useEffect} from 'react';
import './App.css';
import { getData, postData, deleteData } from "../../apiCalls"
import CardContainer from '../CardContainer/CardContainer';
import Form from '../Form/Form'

const App = () => {
  const [trick, updateTrick] = useState([])

  useEffect(()=> {
    getData()
      .then(data=>updateTrick(data))
  }, []) 
  
  const addTrick = (newTrick) => {
    postData(newTrick)
      .then(data=> updateTrick([...trick, data]))
  }
  const deleteTrick = (id) => {
    deleteData(id)
      .then(data=>updateTrick(data))
  }
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={addTrick}/>
        <CardContainer tricks={trick} deleteTrick={deleteTrick}/>
      </div>
    );
}



export default App;