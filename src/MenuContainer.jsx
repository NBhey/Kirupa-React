import { Component } from "react";
import MenuButton from "./MenuButton";

class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { 
        isVisible: false
    }

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toogleMenu = this.toogleMenu.bind(this)
  }

  handleMouseDown(e){
    this.toogleMenu();

    console.log('clicked')
    e.stopPropagation();
  }

  toogleMenu(){
    this.setState({
        isVisible: !this.state.isVisible
    })
  } 

  render() {
    return (
      <>
      <MenuButton handleMouseDown={this.handleMouseDown}/>
        <div>
          <p>Найдешь пункт, который здесь лишний?</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li> Dolor </li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </>
    );
  }
}

export default MenuContainer;
