interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoryState, action: any): RepositoryState => {
  switch (action.type) {
    case "search_repositories":
      return {
        loading: true,
        error: null,
        data: [],
      };
    case "search_repositories_success":
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case "search_repositories_error":
      return {
        loading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
};

export default reducer;
