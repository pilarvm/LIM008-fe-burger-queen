import React, { Component } from "react";
import { menu } from "../menu.json";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      menu
    };
  }
  onClickProduct(i,a){
      console.log("menu",i,a)
  }
  render() {
    const menu = this.state.menu.map((menu, i) => {
      return (
        <div className="btn col-md-1 " key={i} onClick={this.onClickProduct.bind(this, menu.precio, menu.title)}>
          <div className="card  mt-3" type="button" >
            <img className="card-img-top" src={menu.img} alt="cafe" />

            <div className="card-body" >
              <span className="badge badge-pill badge-danger ml-2">
                $ {menu.precio}
              </span>
              <p className="card-text">{menu.title}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row mt-1">{menu}</div>
      </div>
    );
  }
}
export default Menu;
