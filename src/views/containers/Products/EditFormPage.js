import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  productsOperations,
  productsSelectors
} from "../../../state/ducks/products";
import ProductsForm from "../../components/Products/Form";

class EditFormPage extends Component {
  handleEditProduct = product => {
    this.props.actions.updateProduct(product);
    this.props.history.push("/products");
  };

  render() {
    const { product, error } = this.props;

    return (
      <>
        {product ? (
          <ProductsForm
            handleSubmit={this.handleEditProduct}
            product={product}
          />
        ) : (
          <ProductsForm handleSubmit={this.handleEditProduct} error={error} />
        )}
      </>
    );
  }
}

EditFormPage.propTypes = {
  product: PropTypes.object,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const product = productsSelectors.selectCurrentProduct(
    state,
    ownProps.match.params.id
  );
  return {
    product: product,
    error: !product && "ERROR"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        updateProduct: productsOperations.updateProductRequest
      },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFormPage);
