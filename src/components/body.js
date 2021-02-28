import React, { Component } from "react";
import "./body.css";

function Products({ products }) {
  return (
    <ul className="cards-cont">
      {products.products.map((p) => (
        <li className="product-card">
          <img src={p.image}></img>
          {p.title}
        </li>
      ))}
    </ul>
  );
}

class Body extends Component {
  // State
  constructor(props) {
    super(props);

    this.state = {
      showProducts: false,
    };
  }

  makeProductsVisible() {
    this.setState({ showProducts: true });
  }

  render() {
    const products = this.props.products;
    const { showProducts } = this.state;

    return (
      <main>
        <img src={this.props.cover} alt="Website Cover"></img>
        <h1>{this.props.title}</h1>
        <h2>{this.props.description}</h2>
        <div className="products-container">
          {showProducts ? (
            <Products products={products} />
          ) : (
            <button onClick={() => this.makeProductsVisible()}>
              show products
            </button>
          )}
        </div>
      </main>
    );
  }
}

export default Body;
