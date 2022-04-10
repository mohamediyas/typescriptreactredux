import { SyntheticEvent, useState } from "react";

const RepositoriesList = () => {
  const [term, setTerm] = useState("");

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
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
