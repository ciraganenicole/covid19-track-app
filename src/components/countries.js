import React, { useState, useEffect } from 'react';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './navBar';
import SearchBar from './searchBar';
import { getCases } from '../redux/actions';

const CovidCases = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { cases } = useSelector((state) => state.cases);
  const searchUrl = new URLSearchParams(location.search);
  const searchCase = searchUrl.get('search') || '';
  const [search, setSearch] = useState(searchCase);
  const navigate = useNavigate();
  const countries = cases.filter((country) => country.name.toLowerCase().includes(search));

  const onChange = (e) => {
    navigate(e.target.value ? `?search=${e.target.value}` : '');
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(getCases());
  }, []);

  return (
    <>
      <NavBar />
      <SearchBar onChange={onChange} search={search} />
      <ul className="list-container">
        {countries.map((item) => (
          <Link key={item.id} to={`/country/${item.id}`}>
            <li className="h-full relative w-full flex items-end">
              <div className="w-full flex justify-end">
                <div className="text-2xl font-bold flex flex-col text-white">
                  <p>{item.name}</p>
                  <p className="self-end">{item.today_confirmed}</p>
                </div>
              </div>
              <span className="absolute right-0 top-0 text-2xl">
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default CovidCases;
