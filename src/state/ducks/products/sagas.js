import { put, takeEvery, call } from "redux-saga/effects";

import actions from "./actions";
import types from "./types";
import { default as api } from "../../../services/api";

// WORKERS //
export function* fetchProducts() {
  try {
    const data = yield call(
      api.fetchProdcuts,
      "http://localhost:4000/api/products"
    );
    yield put(actions.fetchProductsSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(actions.fetchProductsFailure(err));
  }
}
export function* createProduct(action) {
  try {
    const data = yield call(
      api.createProduct,
      "http://localhost:4000/api/products",
      action.payload
    );
    yield put(actions.createProductSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(actions.createProductFailure(err));
  }
}
export function* deleteProduct(action) {
  try {
    yield call(
      api.deleteProduct,
      `http://localhost:4000/api/products/${action.payload}`
    );
    yield put(actions.deleteProductSuccess(action.payload));
  } catch (err) {
    console.log(err);
    yield put(actions.deleteProductFailure(err));
  }
}
export function* updateProduct(action) {
  try {
    yield call(
      api.updateProduct,
      `http://localhost:4000/api/products/${action.payload.id}`,
      action.payload
    );
    yield put(actions.updateProductSuccess(action.payload));
  } catch (err) {
    console.log(err);
    yield put(actions.updateProductFailure(err));
  }
}

// WATCHERS //
export function* watchFetchProductsAsync() {
  yield takeEvery(types.FETCH_PRODUCTS_REQUEST, fetchProducts);
}
export function* watchCreateProductAsync() {
  yield takeEvery(types.CREATE_PRODUCT_REQUEST, createProduct);
}
export function* watchUpdateProductAsync() {
  yield takeEvery(types.UPDATE_PRODUCT_REQUEST, updateProduct);
}
export function* watchDeleteProductAsync() {
  yield takeEvery(types.DELETE_PRODUCT_REQUEST, deleteProduct);
}

export default [
  watchFetchProductsAsync,
  watchCreateProductAsync,
  watchUpdateProductAsync,
  watchDeleteProductAsync
];
