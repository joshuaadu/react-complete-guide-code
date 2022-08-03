import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";
import counterReducer from "./Counter";

const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer,
	},
});

export default store;
