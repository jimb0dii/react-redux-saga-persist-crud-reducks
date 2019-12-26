import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const persistConfig = {
    key: "root",
    storage
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export default configureStore;
