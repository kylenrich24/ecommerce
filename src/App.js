import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
