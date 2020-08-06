import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";

function App(){
  return <HashRouter>
    <Navigation></Navigation>
    <Route path="/" exact={true} component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/movie-detail" component={Detail}></Route>
  </HashRouter>
}

export default App;