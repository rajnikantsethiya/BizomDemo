import * as types from '../constants/orderActionTypes';

export function handleOrder(res) {
  return { type: types.SET_ORDER_SUCCESS, res };
}
