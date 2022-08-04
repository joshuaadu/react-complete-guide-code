import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	totalAmount: 0,
	showCart: false,
	totalItems: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			const existingItemIndex = state.cartItems.findIndex(
				(item) => item.title === action.payload.title
			);
			if (existingItemIndex > -1) {
				state.cartItems[existingItemIndex].quantity++;
			} else {
				state.cartItems.push({ ...action.payload, quantity: 1 });
				state.totalItems = state.cartItems.length;
			}
		},
		removeItem(state, action) {
			const existingItemIndex = state.cartItems.findIndex(
				(item) => item.title === action.payload.title
			);
			if (
				existingItemIndex > -1 &&
				state.cartItems[existingItemIndex].quantity > 0
			) {
				state.cartItems[existingItemIndex].quantity--;
			} else {
				state.cartItems = state.cartItems.filter(
					(item) => item.title !== action.payload.title
				);
				state.totalItems = state.cartItems.length;
			}
		},
		
		getTotalCartItems(state) {
			state.totalItems = state.cartItems.length();
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
