import { fork, all } from "redux-saga/effects";

import { productsSagas } from "./products";

const allSagas = [...productsSagas];

export default function* rootSaga() {
  yield all(allSagas.map(saga => fork(saga)));
}
