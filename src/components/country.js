/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCase, getCases } from '../redux/actions';
import NavBar from './navDetails';

const CovidCase = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleCase } = useSelector((state) => state.cases);

  useEffect(() => {
    dispatch(getCase(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getCases());
  }, []);

  const RenderData = () => (
    <div>
      {Object.values(singleCase).map((key) => (
        <div key={key}>
          <NavBar name={key.name} confirmed={key.today_confirmed} />
          <ul className="grid grid-cols-1 md:grid-cols-6">
            {key.regions.map((item) => (
              <li
                key={item.id}
                className="col-span-full h-40 flex md:col-span-2 lg:col-span-2 xl:col-span-2 justify-between items-center border border-emerald-900 even:bg-emerald-900 odd:bg-emerald-900 px-2 py-2 text-white text-lg font-bold"
              >
                <p>{item.name}</p>
                <div className="flex justify-center gap-x-4">
                  <p>{item.todayConfirmed}</p>
                  <p>Cases</p>
                  <span className="text-2xl">
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <RenderData />
    </div>
  );
};

export default CovidCase;
