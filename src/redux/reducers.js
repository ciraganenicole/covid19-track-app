import { GET_ALL, GET_SINGLE } from './actionTypes';

const intialState = {
  cases: [],
  singleCase: {},
};
const reducers = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        cases: action.payload,
      };
    case GET_SINGLE:
      return {
        ...state,
        singleCase: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
