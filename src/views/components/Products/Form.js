import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: null,
      description: "",
      ...this.props.product
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  };

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <>
        {!this.props.error ? (
          <form onSubmit={this.handleSubmit} style={{ width: 600 }}>
            <div>
              <label htmlFor="name">Product Name:</label>
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="name">Product Price:</label>
              <input
                id="price"
                name="price"
                type="number"
                defaultValue={this.state.price}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="name">Product Description:</label>
              <textarea
                id="description"
                name="description"
                type="text"
                defaultValue={this.state.description}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={this.goBack}>
              Go Back
            </button>
          </form>
        ) : (
          <>
            Product does not exist
            <button onClick={() => this.props.history.push("/products")}>
              Go Back
            </button>
          </>
        )}
      </>
    );
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  product: PropTypes.object,
  error: PropTypes.string
};

export default withRouter(Form);
