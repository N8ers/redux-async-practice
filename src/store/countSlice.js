import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const countActions = countSlice.actions;

export default countSlice;
