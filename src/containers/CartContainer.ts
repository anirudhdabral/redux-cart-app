import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Product } from "../models/Product";
import { Cart } from "../pages/Cart";
import {
  addToCart,
  emptyCart,
  removeFromCart,
} from "../services/actions/action";

const mapStateToProps = (state: any) => ({
  data: state.cartItems,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToCartHandler: (data: Product) => dispatch(addToCart(data)),
  removeFromCartHandler: (data: Product) => dispatch(removeFromCart(data)),
  emptyCartHandler: () => dispatch(emptyCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
