import { Component } from "react";
import "./HelloWorld.css";
import IPAdressContainer from "./IPAdressContainer";
class HelloWorld extends Component {
  render() {
    return (
      <h1>
        Hello {this.props.test}
        <IPAdressContainer />
      </h1>
    );
  }
}

export default HelloWorld;
