import { Actions } from 'react-native-router-flux';
import BUTTON_PRESSED from './types';

export const buttonPressed = (id) => {
  return {
    type: BUTTON_PRESSED,
    payload: id
  };
};
