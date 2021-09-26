import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import { Projects } from "./projects";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
