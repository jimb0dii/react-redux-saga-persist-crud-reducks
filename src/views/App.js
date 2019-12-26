import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "../routes";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect exact to="/products" />} />
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  );
};

export default App;
