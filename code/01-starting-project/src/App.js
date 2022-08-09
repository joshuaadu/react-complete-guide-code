import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

function App() {
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const notification = useSelector((state) => state.ui.notification);
	const dispatch = useDispatch();
	const showNotification = notification.isVisible;
	useEffect(() => {
		if (showNotification) {
			const timer = setTimeout(
				() => dispatch(uiActions.closeNotification()),
				500
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
