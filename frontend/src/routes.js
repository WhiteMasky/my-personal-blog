import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/article/:id" component={Article} />
    </Router>
  );
};

export default Routes;
