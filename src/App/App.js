import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import StarShipList from '../pages/StarShipLists/StarShipList'
import StarShipPage from '../pages/StarShipPage/StarShipPage'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <h1>StarWars</h1>
      
      <Route 
          exact path='/'
          render={ () => <StarShipList />}
      />
      <Route
        exact path='/starship'
        render={ () => <StarShipPage/>}
      />
      </>
     );
  }
}
 
export default App;
