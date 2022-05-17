import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import '@testing-library/jest-dom';
import NavBar from '../components/navBar';
import SearchBar from '../components/searchBar';
import NavDetails from '../components/navDetails';
import Countries from '../components/countries';
import Country from '../components/country';

describe('Test countries page', () => {
  it('should display the country list', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <NavBar />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should display the country list', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should be able to see the details pages', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<NavDetails />} />
          </Routes>
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should be able to see the details pages', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/country/:id" element={<Countries />} />
          </Routes>
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should be able to see the details pages', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" index element={<Country />} />
          </Routes>
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
