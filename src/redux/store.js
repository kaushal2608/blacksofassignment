// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/features/api/apiSlice";
import userReducer from "@/redux/features/userSlice";

// 👇 rename from `store` to `makeStore` and export the function
export const makeStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
