import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import StarShipList from '../pages/StarShipLists/StarShipList'
import StarShipPage from '../pages/StarShipPage/StarShipPage'
import NavBar from '../components/NavBar/NavBar';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <NavBar />
      <h1>StarWars</h1>
      
      <Route 
          exact path='/'
          render={ () => <StarShipList />}
      />
      <Route
        exact path='/starship'
        render={ ({location}) => <StarShipPage location={location} />}
      />
      </>
     );
  }
}
 
export default App;
