import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartIsVisible: false,
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		showCart(state) {
			state.cartIsVisible = true;
		},
		closeCart(state) {
			state.cartIsVisible = false;
		},
		toggleCart(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
