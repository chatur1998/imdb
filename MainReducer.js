import BUTTON_PRESSED from '../actions/types';

const INITIAL_STATE = {
  id: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUTTON_PRESSED:
      return { ...state, id: action.payload };
    default:
        return state;
  }
};
