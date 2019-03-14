import axios from "axios";

import { BASE_URL } from "../api";
import {
  LOADING,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_MOVIE_DETAILS
} from "../actions/actions.js";

const isLoading = status => ({
  type: LOADING,
  status
});

const fetchError = status => ({
  type: FETCH_ERROR,
  status
});

const handleFetchSuccess = movies => ({
  type: FETCH_SUCCESS,
  movies
});

export const fetchMovies = movie => dispatch => {
  dispatch(isLoading(true));

  axios
    .get(`${BASE_URL}s=${movie}`)
    .then(response => {
      const { data } = response;

      dispatch(isLoading(false));
      dispatch(handleFetchSuccess(data.Search || []));
    })
    .catch(error => {
      dispatch(isLoading(false));
      dispatch(fetchError(true));
    });
};

export const fetchMovieDetails = id => dispatch => {
  if (!id) return null;

  axios
    .get(`${BASE_URL}i=${id}`)
    .then(response => {
      dispatch({
        type: GET_MOVIE_DETAILS,
        data: response.data
      });
    })
    .catch(error => console.log(error));
};
