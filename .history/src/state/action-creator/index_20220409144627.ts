import axios from "axios";

import { ActionTypes } from "../actionTypes";
import { Action } from "../action";
import { async } from "q";

const searchRepositpry = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
    } catch (error) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};
