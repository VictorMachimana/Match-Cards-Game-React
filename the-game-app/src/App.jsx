import React, { Component } from "react";
import TheGame from "./TheGame";
import Header from "./components/Header";
import Home from "./components/Home";
import HowToPlay from "./components/HowToPlay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/TheGame" exact component={TheGame} />
          <Route path="/HowToPlay" exact component={HowToPlay} />
        </Switch>
      </Router>
    );
  }
}

export default App;
