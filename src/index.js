import ReactDOM from "react-dom/client";
import "./index.css";
import MenuContainer from "./MenuContainer";

var destination = document.querySelector("#container");

ReactDOM.createRoot(destination).render(
  <div>
    <MenuContainer />
  </div>
);
