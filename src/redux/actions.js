import {
  GET_ALL,
  GET_SINGLE,
  SEARCH_CASES,
  SEARCH_REGIONS,
} from './actionTypes';
import * as API from './api';

const getCases = () => async (dispatch) => {
  const { data } = await API.retrieveCases();
  const {
    dates: {
      '2020-03-22': { countries },
    },
  } = data;

  const selectedValues = Object.values(countries).map((item) => ({
    id: item.id,
    name: item.name,
    regions: item.regions,
    today_confirmed: item.today_confirmed,
  }));

  dispatch({
    type: GET_ALL,
    payload: selectedValues,
  });
};

const getCase = (id) => async (dispatch) => {
  const { data } = await API.retrieveSingle(id);
  const {
    dates: {
      '2020-03-22': { countries },
    },
  } = data;

  const selectedValues = Object.values(countries).map((item) => ({
    id: item.id,
    name: item.name,
    regions: item.regions,
    today_confirmed: item.today_confirmed,
  }));

  dispatch({
    type: GET_SINGLE,
    payload: selectedValues,
  });
};

const searchCases = (search) => async (dispatch) => {
  dispatch({
    type: SEARCH_CASES,
    payload: search,
  });
};

const searchRegions = (search) => async (dispatch) => {
  dispatch({
    type: SEARCH_REGIONS,
    payload: search,
  });
};

export {
  getCases, getCase, searchCases, searchRegions,
};
