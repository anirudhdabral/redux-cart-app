import { Product } from "../../models/Product";
import { CartActionTypes } from "../constants";

export const addToCart = (data: Product) => {
  return {
    data: data,
    type: CartActionTypes.ADD_TO_CART,
  };
};

export const removeFromCart = (data: Product) => {
  return {
    data: data,
    type: CartActionTypes.REMOVE_FROM_CART,
  };
};

export const emptyCart = () => {
  return {
    data: null,
    type: CartActionTypes.EMPTY_CART,
  };
};
