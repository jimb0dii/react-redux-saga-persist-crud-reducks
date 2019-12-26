import types from "./types";

export const fetchProductsRequest = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = products => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductsFailure = error => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  payload: error
});

export const createProductRequest = product => ({
  type: types.CREATE_PRODUCT_REQUEST,
  payload: product
});

export const createProductSuccess = product => ({
  type: types.CREATE_PRODUCT_SUCCESS,
  payload: product
});

export const createProductFailure = error => ({
  type: types.CREATE_PRODUCT_FAILURE,
  payload: error
});

export const deleteProductRequest = id => ({
  type: types.DELETE_PRODUCT_REQUEST,
  payload: id
});

export const deleteProductSuccess = id => ({
  type: types.DELETE_PRODUCT_SUCCESS,
  payload: id
});

export const deleteProductFailure = error => ({
  type: types.DELETE_PRODUCT_FAILURE,
  payload: error
});

export const updateProductRequest = id => ({
  type: types.UPDATE_PRODUCT_REQUEST,
  payload: id
});

export const updateProductSuccess = product => ({
  type: types.UPDATE_PRODUCT_SUCCESS,
  payload: product
});

export const updateProductFailure = error => ({
  type: types.UPDATE_PRODUCT_FAILURE,
  payload: error
});

export default {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  createProductRequest,
  createProductSuccess,
  createProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure
};
