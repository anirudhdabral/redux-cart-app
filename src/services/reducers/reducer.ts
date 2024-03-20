import { ProductWithCount } from "../../models/ProductWithCount ";
import { CartActionTypes } from "../constants";

const initialState: ProductWithCount[] = [];

interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  data: ProductWithCount;
}

interface EmptyCartAction {
  type: CartActionTypes.EMPTY_CART;
}

interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  data: ProductWithCount;
}

type CartAction = AddToCartAction | EmptyCartAction | RemoveFromCartAction;

export const cartItems = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      const index = state.findIndex((obj) => obj.id === action.data.id);
      if (state.findIndex((obj) => obj.id === action.data.id) !== -1) {
        const newState = [...state];
        newState[index].count++;
        return newState;
      } else {
        return [...state, { ...action.data, count: 1 }];
      }

    case CartActionTypes.REMOVE_FROM_CART:
      const removeIndex = state.findIndex((obj) => obj.id === action.data.id);
      if (removeIndex !== -1) {
        const newState = [...state];
        if (newState[removeIndex].count > 1) {
          newState[removeIndex].count--;
        } else {
          newState.splice(removeIndex, 1);
        }
        return newState;
      }
      return state;

    case CartActionTypes.EMPTY_CART:
      state = [];
      return state;

    default:
      return state;
  }
};
