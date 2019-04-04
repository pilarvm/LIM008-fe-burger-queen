import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { todos } from './menu.json';
console.log(todos);
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
            </div>
            <div className="card-body">
              <p>{todo.descripcion}</p>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">

        <Navigation titulo="hola" />

        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Task
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            {todos}
          </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit and save to reload.
          </p>
        </header>

      </div>
    );
  }
}

export default App;
