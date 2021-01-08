import React, { Component } from "react";
import { getShipDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";

class StarshipDetails extends Component {
  state = {
    url: this.props.location.state.name.url,
    starshipDetails: {},
  };
  async componentDidMount() {
    console.log(this.state.url);
    const starshipDetails = await getShipDetails(this.state.url);
    this.setState({ starshipDetails });
  }
  render() {
    const { starshipDetails } = this.state;
    return (
      <div>
        {starshipDetails.name ? (
          <>
            <br />
            <br />
            <div
              class="card text-white bg-secondary mb-3"
              styles={"max-width: 18rem;"}
            >
              <div class="card-header">STARSHIP DETAILS</div>
              <div class="card-body">
                <h5 class="card-title">Name: {starshipDetails.name}</h5>
                <p class="card-text">Model: {starshipDetails.model}</p>
                <p class="card-text">
                  Passengers: {starshipDetails.passengers}
                </p>
                <p class="card-text">
                  Cargo Capacity: {starshipDetails.cargo_capacity}
                </p>
                <p class="card-text">
                  Starship Class: {starshipDetails.starship_class}
                </p>
              </div>
            </div>
            <Link
              to={{
                // This route will route us back to starship lists /
                pathname: "/",
              }}
            >
              Return to home
            </Link>
          </>
        ) : (
          <>
            <p>Loading details please wait...</p>
          </>
        )}
      </div>
    );
  }
}

export default StarshipDetails;
