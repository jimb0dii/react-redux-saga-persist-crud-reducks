import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { productsOperations } from "../../../state/ducks/products";
import ProductsList from "../../components/Products/List";

class ListPage extends Component {
  componentDidMount() {
    if (!this.props.products.list) {
      this.props.actions.fetchProducts();
    }
  }

  handleDeleteProduct = id => {
    this.props.actions.deleteProduct(id);
  };

  handleUpdateProduct = id => {
    this.props.actions.deleteProduct(id);
  };

  handleEditProduct = id => {
    this.props.history.push(`products/${id}/edit`);
  };

  handleRefresh = () => {
    this.props.actions.fetchProducts();
  };

  render() {
    return (
      <ProductsList
        products={this.props.products}
        deleteProduct={this.handleDeleteProduct}
        editProduct={this.handleEditProduct}
        refreshProducts={this.handleRefresh}
      />
    );
  }
}

ListPage.propTypes = {
  products: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchProducts: productsOperations.fetchProductsRequest,
        deleteProduct: productsOperations.deleteProductRequest
      },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
