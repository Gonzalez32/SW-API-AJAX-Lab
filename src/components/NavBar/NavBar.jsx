import React from "react";

const NavBar = (props) => {
  return (
    <div className="App-header">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h1 id="title">STAR WARS STARSHIPS</h1>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
