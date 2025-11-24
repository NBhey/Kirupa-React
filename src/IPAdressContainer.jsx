import { Component } from "react";
import IPAdress from './IPAdress'

const xhr = new XMLHttpRequest();

class IPAdressContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ip_address: "...",
    };

    this.proccessRequest = this.proccessRequest.bind(this);
  }

  componentDidMount() {
    xhr.open("GET", 'https://ipinfo.io/json', true)
    xhr.send()

    xhr.addEventListener("readystatechange", this.proccessRequest, false);
  }

  proccessRequest(){
    if( xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText); 

        this.setState({
            ip_address:response.ip
        })
    }

    
  }

  render() {
    return <IPAdress ip = {this.state.ip_address}/>;
  }
}

export default IPAdressContainer