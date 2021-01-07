import React, { Component } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

class StarShipList extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const shipData = await getAllStarships();
    console.log(shipData);
    this.setState({ results: shipData.results });
  }

  render() {
    return (
      <div>
        <h1>StarShipList</h1>
        {this.state.results.map((name) => (
          <div id="classDiv" key={name.name}>
            <Link
              to={{
                // The pathname is where we'll route to
                pathname: `/starship`,
                // The state will be accessible via location in the component we pass it to!
                state: { name },
              }}
            >
              {name.name}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default StarShipList;
