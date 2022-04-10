import { Provider } from "react-redux";
import { store } from "../state";
import React, { ReactNode } from "react";

function App() {
  return (
    <div>
      <Provider store={store}>
        <h1>Search for Respository</h1>
      </Provider>
    </div>
  );
}

App.tsx;

export default App;
