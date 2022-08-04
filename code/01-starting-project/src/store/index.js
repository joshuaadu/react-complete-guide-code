import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart-slice";
import uiReducer from "./ui-slice";

const store = configureStore({
	reducer: {
		cart: CartReducer,
		ui: uiReducer,
	},
});

export default store;
