import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";

var destination = document.querySelector("#root");

ReactDOM.createRoot(destination).render(
  <div>
    <Main />
  </div>
);
