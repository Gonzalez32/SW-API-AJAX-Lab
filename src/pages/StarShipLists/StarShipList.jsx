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
                // The pathname is route to starship
                pathname: `/starship`,
                // The state will be accessible via location in the component we pass it to!
                state: { name },
              }}
            >
              <div
                class="card text-white bg-secondary mb-3"
                // when rendering cards with bootstrap you need to modified style to styles={} to have it working!
                styles={"max-width: 18rem;"}
              >
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Secondary card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <h3>{name.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default StarShipList;
