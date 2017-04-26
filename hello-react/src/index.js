import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import About from './About';
// import Menu from './Menu';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>,
  document.getElementById('root')
);
