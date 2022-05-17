import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophone,
  faAngleLeft,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const { cases } = useSelector((state) => state.cases);
  const total = cases.reduce((acc, item) => acc + item.today_confirmed, 0);

  return (
    <>
      <div className="h-10 w-full flex justify-between px-4 items-center bg-emerald-900 text-white">
        <div className="flex gap-x-1 items-center font-bold">
          <FontAwesomeIcon icon={faAngleLeft} />
          <p>Home</p>
        </div>
        <h1>Covid-19 Statistics</h1>
        <div className="flex gap-x-4 items-center">
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faGear} />
        </div>
      </div>
      <div className="w-full h-[_16rem] bg-emerald-400 flex items-center">
        <div className="mx-auto flex items-center flex-col gap-y-8 justify-between text-2xl text-sky-900">
          <h1 className="font-bold text-4xl">Welcome to covid tracker</h1>
          <div className="flex gap-y-3 justify-between w-[_20rem] items-center">
            <div className="h-3/4 w-[_45%]">
              <img
                src="/images/globe1.svg"
                alt="covid"
                className="bg-cover w-full"
              />
            </div>
            <div className="w-[_48%] gap-y-4 flex flex-col">
              <p className="text-3xl font-bold">Europe</p>
              <span>
                <b>{total}</b>
                {' '}
                cases
              </span>
              {' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
