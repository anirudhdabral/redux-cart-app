import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Header } from "../components/Header";

const mapStateToProps = (state: any) => ({
  data: state.cartItems,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
