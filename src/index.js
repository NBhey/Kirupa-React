import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import {createStore } from 'redux'
import { Provider } from "react-redux";
import counter from './reducer'

var destination = document.querySelector("#root");
var store = createStore(counter)

ReactDOM.createRoot(destination).render(
  <Provider store={store}>
    <Main />
  </Provider>
);
