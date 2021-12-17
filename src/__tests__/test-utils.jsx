// this test-util is based off the docs below
// https://redux.js.org/usage/writing-tests

import React from "react";
import { render as reactTestLibraryRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// import reducer
import countReducer from "../store/countSlice";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { count: countReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return reactTestLibraryRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
