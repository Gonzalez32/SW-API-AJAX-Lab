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
            <h2>Name: {starshipDetails.name}</h2>
            <h2>Model: {starshipDetails.model}</h2>
            <Link
              to={{
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
