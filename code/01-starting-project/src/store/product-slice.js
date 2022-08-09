import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialState = {
	items: [],
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		loadProducts(state, action) {
			state.items = action.payload;
		},
	},
});

export const productActions = productSlice.actions;

export const fetchProducts = () => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				message: "Loading products data!",
				status: "pending",
				title: "Fetching...",
			})
		);

		const fetchData = async () => {
			const response = await fetch(
				"https://redux-store-test-default-rtdb.firebaseio.com/products.json"
			);
			if (!response.ok) throw new Error(response.body);
			const data = await response.json();
			dispatch(productActions.loadProducts(Object.entries(data)));
		};

		try {
			await fetchData();
			dispatch(
				uiActions.showNotification({
					message: "Products successfully loaded!",
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

export default productSlice.reducer;
