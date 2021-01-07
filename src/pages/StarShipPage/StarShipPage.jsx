import React, { Component } from "react";
import { getAllStarships } from "../../services/sw-api";

class StarshipPage extends Component {
  state = {
    starships: [],
  };

  getStarship = (idx) => {
    return this.state.starships[idx];
  };

  async componentDidMount() {
    const starship = await getAllStarships(this.state.url);
    this.setState({ starship });
  }

  render() {
    return (
      <>
        <h1>hihijndsna;lf</h1>
        <div>{this.state.name}</div>
      </>
    );
  }
}

export default StarshipPage;
