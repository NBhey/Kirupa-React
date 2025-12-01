import { Component } from "react";

class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { 
        isVisible: false
    }

    this.toogleMenu = this.toogleMenu.bind(this)
  }

  toogleMenu(){
    this.setState({
        isVisible: !this.state.isVisible
    })
  } 

  render() {
    return (
      <>
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
