import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart-slice";
import uiReducer from "./ui-slice";
import productReducer from "./product-slice";

const store = configureStore({
	reducer: {
		cart: CartReducer,
		ui: uiReducer,
		products: productReducer,
	},
});

export default store;
