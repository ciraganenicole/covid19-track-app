import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import '@testing-library/jest-dom';
import Countries from '../components/countries';
import reducer from '../redux/reducers';
import { GET_ALL, GET_SINGLE } from '../redux/actionTypes';

describe('Test countries page', () => {
  it('should return an initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toEqual({
      cases: [],
      singleCase: {},
    });
  });

  it('should display the country list', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Countries />} />
          </Routes>
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should be able to return a state with list of items', () => {
    const initialState = reducer(undefined, {});
    const action = {
      type: GET_ALL,
      payload: [
        {
          country: 'US',
          cases: '1',
          deaths: '2',
          recovered: '3',
          updated: '4',
        },
      ],
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({
      cases: [
        {
          country: 'US',
          cases: '1',
          deaths: '2',
          recovered: '3',
          updated: '4',
        },
      ],
      singleCase: {},
    });
  });
  it('should be able to return a state with a single item', () => {
    const initialState = reducer(undefined, {});
    const action = {
      type: GET_SINGLE,
      payload: {
        country: 'US',
        cases: '1',
        deaths: '2',
        recovered: '3',
        updated: '4',
      },
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({
      cases: [],
      singleCase: {
        country: 'US',
        cases: '1',
        deaths: '2',
        recovered: '3',
        updated: '4',
      },
    });
  });
});
