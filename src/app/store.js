import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import exchangeRateReducer from "../slices/exchangeRateSlice";


export const store = configureStore({
  reducer: {
    exchangeRate: exchangeRateReducer,
    basket: basketReducer,
  },
});
