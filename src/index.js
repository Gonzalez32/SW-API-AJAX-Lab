import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
// import bootstrap to render on page
import 'bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';
// install npm i react-router-dom to get this working!
import {BrowserRouter as Router, Route} from 'react-router-dom'

// change the following layout!
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route render={()=> <App />} />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
