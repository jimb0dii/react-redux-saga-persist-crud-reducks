import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { productsOperations } from "../../../state/ducks/products";
import ProductsForm from "../../components/Products/Form";

class AddFormPage extends Component {
  handleAddProduct = product => {
    this.props.actions.addProduct(product);
    this.props.history.push("/products");
  };

  render() {
    return <ProductsForm handleSubmit={this.handleAddProduct} />;
  }
}

AddFormPage.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        addProduct: productsOperations.createProductRequest
      },
      dispatch
    )
  };
};

export default connect(null, mapDispatchToProps)(AddFormPage);
