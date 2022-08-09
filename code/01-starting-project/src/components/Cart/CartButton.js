import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
	const totalCartItems = useSelector((state) => state.cart.totalItems);
	const dispatch = useDispatch();

	const openCartHandler = () => dispatch(uiActions.toggleCart());
	return (
		<button className={classes.button} onClick={openCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalCartItems}</span>
		</button>
	);
};

export default CartButton;
