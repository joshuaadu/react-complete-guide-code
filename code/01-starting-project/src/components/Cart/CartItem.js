import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
	const { title, quantity, price } = props.item;
	const dispatch = useDispatch();

	let total = parseInt(quantity) * parseInt(price);

	const increaseQuantityHandler = () => {
		dispatch(cartActions.addItem({ title }));
	};
	const decreaseQuantityHandler = () => {
		dispatch(cartActions.removeItem({ title }));
	};
	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{" "}
					<span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={decreaseQuantityHandler}>-</button>
					<button onClick={increaseQuantityHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
