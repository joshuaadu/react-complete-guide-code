import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const items = useSelector((state) => state.cart.cartItems);
	let hasItems = items.length > 0;
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{hasItems &&
					items.map(
						(item) =>
							item.quantity > 0 && <CartItem item={item} key={item.title} />
					)}
			</ul>
		</Card>
	);
};

export default Cart;
