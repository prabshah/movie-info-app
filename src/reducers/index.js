import {
  LOADING,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_MOVIE_DETAILS
} from "../actions/actions.js";

export const initialState = {
  movieList: [],
  movieDetails: {},
  isLoading: false,
  hasErrored: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.status
      };
    case FETCH_ERROR:
      return {
        ...state,
        hasErrored: action.status,
        movieList: []
      };
    case FETCH_SUCCESS:
      state.movieList = [];
      return {
        ...state,
        movieList: [...state.movieList, ...action.movies]
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: Object.assign({}, action.data)
      };
    default:
      return state;
  }
};
