import types from "./types";

const INITIAL_STATE = {
  list: null,
  loading: false,
  error: null
};

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
    case types.CREATE_PRODUCT_REQUEST:
    case types.UPDATE_PRODUCT_REQUEST:
    case types.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.payload.data,
        loading: false
      };
    case types.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload.data],
        loading: false
      };
    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        list: state.list.map(product => {
          if (product.id === action.payload.id) {
            return { ...product, ...action.payload };
          }
          return product;
        }),
        loading: false
      };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        list: state.list.filter(product => product.id !== action.payload),
        loading: false
      };
    case types.FETCH_PRODUCTS_FAILURE:
    case types.CREATE_PRODUCT_FAILURE:
    case types.UPDATE_PRODUCT_FAILURE:
    case types.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default products;
