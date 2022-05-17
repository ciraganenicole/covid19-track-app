import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CovidCases from './components/countries';
import { getCases } from './redux/actions';
import CovidCase from './components/country';
import { retrieveCases } from './redux/api';

const App = () => {
  const dispatch = useDispatch();
  const { cases } = useSelector((state) => state.cases);
  useEffect(() => {
    if (cases.length === 0) {
      retrieveCases().then((res) => {
        dispatch(getCases(res));
      });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" index element={<CovidCases />} />
        <Route path="/country/:id" element={<CovidCase />} />
      </Routes>
    </Router>
  );
};

export default App;
