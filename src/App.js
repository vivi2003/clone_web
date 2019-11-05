import React from 'react';
import Home from './Container/Home/Home';
import Kampanye from './Container/Kampanye/Kampanye';
import Profile from './Container/Profile/Profile';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
        < Home />
        </Route>
        <Route path="/Kampanye">
        < Kampanye />
        </Route>
        <Route path="/Profile">
        < Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;