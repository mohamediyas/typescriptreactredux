import { Provider } from "react-redux";
import { store } from "../state";
import React, { ReactNode } from "react";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <h1>Search for Respository</h1>
      </Provider>
    </div>
  );
};

export default App;
