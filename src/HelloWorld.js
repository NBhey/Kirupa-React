import { Component } from "react";

class HelloWorld extends Component {

  render() {
    return <h1>Hello {this.props.test}</h1>;
  }
}


export default HelloWorld