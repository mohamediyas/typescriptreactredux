import { Provider } from "react-redux";
import { store } from "../state";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <h1>Search for Respository</h1>
        </div>
      </Provider>
    </div>
  );
};

export default App;
