import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import "./App.css";

const HatsPage = () => <div>Hats</div>;

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
};

export default App;
