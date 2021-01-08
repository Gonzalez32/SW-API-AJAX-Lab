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
                className="row row-cols-1 row-cols-md-2 g-4"
                // when rendering cards with bootstrap you need to modified style to styles={} to have it working!
                // styles={"max-width: 18rem;"}
              >
                <div className="col">
                  <div className="card">
                    <div className="card-body bg-secondary text-white">
                      <h5 className="card-title">Name: {name.name}</h5>
                      <p className="card-text">
                        Manufacturer: {name.manufacturer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default StarShipList;
