import React, { Component } from 'react';
import './App.css';




class App extends Component {
  constructor(){
    super();
    this.state = {
      animalcard: []
      
    }
  }

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/")
      .then(res => res.json())
      .then(res => {console.log(res)
      this.setState({ ...this.state, animalcard: [ ...this.state.animalcard, res.image]})})
      .catch(err => console.log("Error", err))
  }

  getFox = () => {
    fetch("https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(res => {console.log(res)
    this.setState({ ...this.state, animalcard: [ ...this.state.animalcard, res.image]})})
    .catch(err => console.log("Error", err))
  }

  getDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(res => {console.log(res)
    this.setState({ ...this.state, animalcard: [ ...this.state.animalcard, res.message]})
  })
    .catch(err => console.log("Error", err))
  }
  
  

  render() {
  return (
    <div className="App">
      <header className="App-header">
      {this.state.animalcard.map(animal => <div><img src={animal} alt="Fox"></img></div>)}
      <button onClick={this.getFox}>Add more Foxes</button>
      <button onClick={this.getDog}>Add more Dogs</button>
      </header>
    </div>
  );
}
}
export default App;
