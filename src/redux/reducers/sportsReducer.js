import {
  GET_SPORTS,
  SET_LOADING,
  SPORTS_ERROR,
  SPORT_UPDATE_PRICE,
  SPORT_EVENT,
  SPORT_BTN_CLICK,
  SPORT_SELECTION_EVENT,
} from '../constants';

import {
  updateActive,
  updateSportPrice,
  updateSportBtn,
  updateSportSelection,
} from '../util/sportUtil';

const initialState = {
  sports: null,
  loading: false,
  error: null,
  btn: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SPORTS:
      return {
        ...state,
        sports: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SPORTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SPORT_EVENT:
      const newState = Object.assign({}, state);
      updateActive(newState, action.payload);
      return {
        ...newState,
      };
    case SPORT_SELECTION_EVENT:
      const newStateSelection = Object.assign({}, state);
      updateSportSelection(newStateSelection, action.payload);
      return {
        ...newStateSelection,
      };
    case SPORT_UPDATE_PRICE:
      const newStatePrice = Object.assign({}, state);
      updateSportPrice(newStatePrice, action.payload);
      return {
        ...newStatePrice,
      };
    case SPORT_BTN_CLICK:
      const newStateBtn = Object.assign({}, state);
      updateSportBtn(newStateBtn, action.payload);
      return {
        ...newStateBtn,
      };
    default:
      return state;
  }
};
