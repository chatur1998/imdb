import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { BUTTON_PRESSED, FETCH_MOVIE } from './types';

export const fetchMovies = () => {
  const movies = axios.get('https://akrp-server.herokuapp.com/movies?p=1');
  return (dispatch) => {
    dispatch({ type: FETCH_MOVIE, payload: movies });
      Actions.details();
    };
  };

export const buttonPressed = (id) => {
  const data = axios.get(`https://akrp-server.herokuapp.com/movies/${id}`);
  return {
    type: BUTTON_PRESSED,
    payload: data
};
};
