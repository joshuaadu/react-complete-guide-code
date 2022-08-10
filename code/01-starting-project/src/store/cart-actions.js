import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const SendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				message: "Sending cart data!",
				status: "pending",
				title: "Sending...",
			})
		);

		const sendData = async () => {
			const response = await fetch(
				"https://redux-store-test-default-rtdb.firebaseio.com/cart.json",
				{
					method: "PUT",
					body: JSON.stringify({
						items: cart.cartItems,
						totalQuantity: cart.totalItems,
					}),
				}
			);
			if (!response.ok) throw new Error("Sending cart data failed.");
		};

		try {
			await sendData();
			dispatch(
				uiActions.showNotification({
					message: "Cart data successfully sent!",
					status: "success",
					title: "Success!",
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					message: error.message,
					status: "error",
					title: "Error!",
				})
			);
		}
	};
};

export const fetchCartData = () => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				message: "Fetching cart data!",
				status: "pending",
				title: "Fetching...",
			})
		);

		const fetchData = async () => {
			const response = await fetch(
				"https://redux-store-test-default-rtdb.firebaseio.com/cart.json"
			);

			if (!response.ok) throw new Error("Sending cart data failed.");
			const data = await response.json();
			return data;
		};

		try {
			const data = await fetchData();
			dispatch(cartActions.replaceCart(data));
			dispatch(
				uiActions.showNotification({
					message: "Cart data successfully fetched!",
					status: "success",
					title: "Success!",
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					message: error.message,
					status: "error",
					title: "Error!",
				})
			);
		}
	};
};
