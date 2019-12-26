const selectCurrentProduct = (state, id) => {
  const products = state.products.list;
  return products.find(product => product.id === parseInt(id));
};

export default {
  selectCurrentProduct
};
