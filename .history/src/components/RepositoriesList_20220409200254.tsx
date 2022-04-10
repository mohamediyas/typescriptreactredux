import { SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { actionCreators } from "../state";

const RepositoriesList = () => {
  const [term, setTerm] = useState("");

  const { searchRepositpry } = useActions();

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    searchRepositpry(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}

      {loading && <h3>Loading....</h3>}
      {!loading && !error && data.map((v) => <div key={v}>{v}</div>)}
    </div>
  );
};

export default RepositoriesList;
