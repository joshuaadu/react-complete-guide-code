import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	totalAmount: 0,
	showCart: false,
	totalItems: 0,
	changed: false,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		replaceCart(state, action) {
			state.cartItems = action.payload.items || [];
			state.totalItems = action.payload.totalQuantity;
		},

		addItem(state, action) {
			const existingItemIndex = state.cartItems.findIndex(
				(item) => item.title === action.payload.title
			);
			state.changed = true;
			if (existingItemIndex > -1) {
				state.cartItems[existingItemIndex].quantity++;
				state.totalItems++;
			} else {
				state.cartItems.push({ ...action.payload, quantity: 1 });
				state.totalItems++;
			}
		},

		removeItem(state, action) {
			const existingItemIndex = state.cartItems.findIndex(
				(item) => item.title === action.payload.title
			);
			state.changed = true;
			if (
				existingItemIndex > -1 &&
				state.cartItems[existingItemIndex].quantity > 0
			) {
				state.cartItems[existingItemIndex].quantity--;
				state.totalItems--;
			} else {
				state.cartItems = state.cartItems.filter(
					(item) => item.title !== action.payload.title
				);
				state.totalItems--;
			}
		},

		getTotalCartItems(state) {
			state.totalItems = state.cartItems.length();
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
