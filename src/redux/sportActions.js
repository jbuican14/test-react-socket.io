import {
  GET_SPORTS,
  SET_LOADING,
  SPORTS_ERROR,
  SPORT_UPDATE_PRICE,
  SPORT_EVENT,
  SPORT_BTN_CLICK,
  SPORT_SELECTION_EVENT,
} from './constants';

/*
Get sport events from server 
*/
export const getSports = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('http://localhost:3001/api/selections');
    const data = await res.json();
    dispatch({
      type: GET_SPORTS,
      payload: data.category,
    });
  } catch (err) {
    dispatch({
      type: SPORTS_ERROR,
      payload: err.response.data,
    });
  }
};

/*
Set Loading to True
*/
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

/*
Update the event Price
*/
export const updatePrice = (data) => {
  return {
    type: SPORT_UPDATE_PRICE,
    payload: data,
  };
};

/* 
Set Events
*/
export const setSportEvents = (data) => {
  return {
    type: SPORT_EVENT,
    payload: data,
  };
};
/* 
Set Selection Status
*/
export const setSportSelectionEvents = (data) => {
  return {
    type: SPORT_SELECTION_EVENT,
    payload: data,
  };
};

/* 
Set Button ON/OFF
*/
export const setSportButton = (data) => {
  return {
    type: SPORT_BTN_CLICK,
    payload: data,
  };
};
