import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Product } from "../models/Product";
import { Home } from "../pages/Home";
import { addToCart } from "../services/actions/action";

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToCartHandler: (data: Product) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
