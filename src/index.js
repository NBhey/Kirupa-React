import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDOM.createRoot(destination).render(
  <div>
    <TodoList />
  </div>
);
