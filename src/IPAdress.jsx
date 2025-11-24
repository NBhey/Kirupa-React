import { Component } from "react";

class IPAdress extends Component {
    render(){
        return <div>
            <h1>{this.props.ip}</h1>
            <p>Это ваш ip адрес, наверное ...</p>
        </div>
    }
}

export default IPAdress