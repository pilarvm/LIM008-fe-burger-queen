import React, { Component } from 'react';
import './App.css';
import Head from './components/Header';
import Pedido from './components/Pedido';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Pedido />
        <Menu />
      </div>
    );
  }
}
export default App;
