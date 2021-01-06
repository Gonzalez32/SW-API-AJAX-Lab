import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import StarShipList from '../pages/StarShipLists/StarShipList'
// import StarShipPage from '../pages/StarShipPage/StarShipPage'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <h1>Starship Lists</h1>
      
      <Route 
          exact path='/'
          render={ () => <StarShipList />}
        />
      </>
     );
  }
}
 
export default App;
