/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faMicrophone,
  faAngleLeft,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ confirmed, name }) => (
  <>
    <div className="h-10 w-full flex justify-between px-4 items-center bg-emerald-600 text-white">
      <Link to='/'>
        <div className="flex gap-x-1 items-center font-bold">
          <FontAwesomeIcon icon={faAngleLeft} />
          <p>Home</p>
        </div>
      </Link>
      <h1>Covid-19 Statistics</h1>
      <div className="flex gap-x-4 items-center">
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
    <div className="w-full h-[_16rem] bg-emerald-800 flex items-center">
      <div className="mx-auto flex items-center flex-col gap-y-8 justify-between text-2xl text-white">
        <h1 className="font-bold text-2xl">STATS BY REGIONS</h1>
        <div className="flex gap-y-3 justify-between w-[_20rem] items-center">
          <div className="h-3/4 w-[_45%]">
            <img
              src='/images/globe1.svg'
              alt='covid'
              className="bg-cover w-full"
            />
          </div>
          <div className="w-[_48%] gap-y-4 flex flex-col">
            <p className="text-3xl font-bold">{name}</p>
            <span>
              <b>{confirmed}</b>
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
export default NavBar;
