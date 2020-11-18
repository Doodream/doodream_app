import React from 'react';
import { HashRouter, Route, Switch} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";

function App(){
  return <HashRouter>
  <Navigation></Navigation>
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path ="/about" component={About}></Route>
    </Switch>
  </HashRouter>
}

export default App;