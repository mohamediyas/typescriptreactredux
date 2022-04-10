import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

function App(): any {
  return (
    <div>
      <Provider store={store}>
        <h1>Search for Respository</h1>
        <RepositoriesList />
      </Provider>
    </div>
  );
}

export default App;
