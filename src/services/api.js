import axios from "axios";
const fetchProdcuts = async url => {
  const response = await axios.get(url);
  return response;
};
const createProduct = async (url, product) => {
  const response = await axios.post(url, product);
  return response;
};
const deleteProduct = async url => {
  await axios.delete(url);
};
const updateProduct = async (url, data) => {
  await axios.put(url, data);
};

export default {
  fetchProdcuts,
  createProduct,
  deleteProduct,
  updateProduct
};
