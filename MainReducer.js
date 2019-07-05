import { BUTTON_PRESSED, FETCH_MOVIE } from '../actions/types';

const INITIAL_STATE = {
  imdb: [],
  details: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return { ...state, imdb: action.payload };
    case BUTTON_PRESSED:
      return { ...state, details: action.payload };
    default:
        return state;
  }
};
