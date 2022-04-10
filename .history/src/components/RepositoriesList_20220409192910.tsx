import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";

const RepositoriesList = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(actionCreators.searchRepositpry(term));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
