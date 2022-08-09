import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartIsVisible: false,
	notification: {
		isVisible: false,
		message: null,
		status: null,
		title: null,
	},
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
		showNotification(state, action) {
			state.notification.message = action.payload.message;
			state.notification.title = action.payload.title;
			state.notification.status = action.payload.status;
			state.notification.isVisible = true;
		},
		closeNotification(state) {
			state.notification = initialState.notification
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
