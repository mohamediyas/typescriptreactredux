import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";
import { actionCreators } from "../state";

const RepositoriesList = () => {
  const [term, setTerm] = useState("");

  const { searchRepositpry } = useActions();

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
    </div>
  );
};

export default RepositoriesList;
