import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const List = props => {
  const { list: products, error, loading } = props.products;
  const { deleteProduct, editProduct } = props;

  return (
    <>
      <Link to="/products/add">
        <button>Add Product</button>
      </Link>
      <button onClick={props.refreshProducts}>Refresh</button>
      {!loading ? (
        !error ? (
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map(product => (
                  <tr key={product.id}>
                    <th>{product.id}</th>
                    <th>{product.name}</th>
                    <th>{product.price}</th>
                    <th>{product.description}</th>
                    <th>
                      <button onClick={e => deleteProduct(product.id)}>
                        Delete
                      </button>
                      <button onClick={e => editProduct(product.id)}>
                        Edit
                      </button>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <div>Error something went wrong</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

List.propTypes = {
  products: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
  refreshProducts: PropTypes.func.isRequired
};

export default List;
