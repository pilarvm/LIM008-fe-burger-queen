import React, { Component } from "react";
import "../App.css";

class Pedido extends Component {
  constructor() {
    super();
    this.state = {
      pedido: [
        { id: 0, text: "Text1" },
        { id: 1, text: "Text2" },
        { id: 2, text: "Text3" }
      ]
    };
  }
  render() {
      const { pedido} = this.state;
      const pedidoList = pedido.map(pedido => {
        return <li key={pedido.id}>{pedido.text}</li>
    });
    return ( 
        <ol>
            {pedidoList}
        </ol>
    )
  }
}

export default Pedido;
