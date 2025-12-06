import { Component } from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <>
          <h1>Просто SPA-приложение</h1>

          <ul className="header">
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Продукты</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Контакты</NavLink>
            </li>
          </ul>

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stuff" element={<Stuff />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </>
      </HashRouter>
    );
  }
}

export default Main;
