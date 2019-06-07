import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from "./components/Navbar";
import { Container, } from "semantic-ui-react";
import Blog from "./components/Blog";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/blog" component={Blog} />
     <Route component={NoMatch} />
    </Switch>
  </Container>
 </Fragment>
);

export default App;
