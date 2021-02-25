import React, { Component } from "react";
import "./body.css";

class Body extends Component {
  render() {
    return (
      <main>
        <img src={this.props.cover} alt="Website Cover"></img>
        <h1>{this.props.title}</h1>
        <h2>{this.props.description}</h2>
      </main>
    );
  }
}

export default Body;
