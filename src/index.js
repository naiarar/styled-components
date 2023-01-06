import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// import Sobre from './pages/sobre';
// import Contato from './pages/contato';


ReactDOM.render(
  (
    <Router>
      <App>
        <Routes>
          <Route path="/">
            <Home></Home>
          </Route>
        </Routes>
      </App>
    </Router>
  ),
  document.getElementById('root')
);


