import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import MainPage from "./views/MainPage/index";
import Resources from "./views/Resources/index";
import Schedule from "./views/Shedule/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Michael Divino - Studio</title>
        </Helmet>
        <BrowserRouter>
          <Switch>
            <Route path={"/"} component={MainPage} />
            <Route path={"/resources"} component={Resources} />
            <Route path={"/schedule"} component={Schedule} />
          </Switch>
        </BrowserRouter>

      </div>
    )
  }

}

export default App;
