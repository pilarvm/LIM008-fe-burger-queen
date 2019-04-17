import React, { Component } from 'react';
import '../App.css';

class Pedido extends Component {
    constructor (){
        super();
        this.state ={
            title: 'xx'
           
        };
    }
    render() {
        return (
            <section className="sections1">
                <div className="list-group">
                    <a href=" " className="list-group-item ">
                        <p className="list-group-item-text">{this.state.title}</p>
                    </a>
                   
                </div>
            </section>
        )
    }
}
export default Pedido;