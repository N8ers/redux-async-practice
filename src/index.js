// imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// store
import { store } from "./store/index";

// components
import App from "./App";

// styles
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
