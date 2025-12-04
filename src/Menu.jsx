/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    console.log("Rendering: Menu");

    var visibilty = "hide";

    if (this.props.menuVisibility) {
      visibilty = "show";
    }

    return (
      <div
        id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibilty}
      >
        <h2>
          <a href="#">Главная</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Search</a>
        </h2>
      </div>
    );
  }
}

export default Menu;
