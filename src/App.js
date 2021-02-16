import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
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
=======
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Looking to implement some sort of hash router updater when a section has been scrolled into view, or at least when a link is given to a section, it will lead you there. Here's a solution I found. Hi future Erik! https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
>>>>>>> Stashed changes

}

export default App;
