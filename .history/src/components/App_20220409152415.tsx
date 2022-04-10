import { Provider } from "react-redux";
import { store } from "../state";
import React from "react";

const App = (): JSX.Element => {
  return (
    <>
      <Provider store={store}>
        <div>
          <h1>Search for Respository</h1>
        </div>
      </Provider>
    </>
  );
};

export default App;
