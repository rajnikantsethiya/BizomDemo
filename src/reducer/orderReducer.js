import * as types from '../constants/orderActionTypes';

const initialState = {
  orderData: null
};

export default function orderReducer(state = initialState, action) {
  let data;
  switch (action.type) {
    case types.SET_ORDER_SUCCESS:
      data = action.res;
      return Object.assign({}, state, {
        orderData: data
      });
    default:
      return state;
  }
}
