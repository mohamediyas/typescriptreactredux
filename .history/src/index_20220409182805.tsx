import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
