import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData } from "./store/cart-actions";
import { SendCartData } from "./store/cart-actions";
import { fetchProducts } from "./store/product-slice";
import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
	const cart = useSelector((state) => state.cart);
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const notification = useSelector((state) => state.ui.notification);
	const dispatch = useDispatch();
	const showNotification = notification.isVisible;

	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
    if(cart.changed){

      dispatch(SendCartData(cart));
    }
	}, [cart, dispatch]);

	useEffect(() => {
		if (showNotification) {
			const timer = setTimeout(
				() => dispatch(uiActions.closeNotification()),
				1000
			);
			return () => clearTimeout(timer);
		}
	}, [dispatch, showNotification]);

	return (
		<>
			{showNotification && (
				<Notification
					message={notification.message}
					title={notification.title}
					status={notification.status}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
