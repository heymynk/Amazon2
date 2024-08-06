import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchExchangeRate = createAsyncThunk(
  "exchangeRate/fetchExchangeRate",
  async () => {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await response.json();
    return data.rates.INR;
  }
);

const exchangeRateSlice = createSlice({
  name: "exchangeRate",
  initialState: {
    rate: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExchangeRate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rate = action.payload;
      })
      .addCase(fetchExchangeRate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default exchangeRateSlice.reducer;
