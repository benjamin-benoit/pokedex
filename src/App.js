import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PokeList from "./PokeList";
import Pokemon from "./Pokemon";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PokeList} />
            <Route path="/pokemon/:id" component={Pokemon} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
