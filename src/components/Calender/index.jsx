import React, { useState } from 'react';
import { GoClockFill } from 'react-icons/go';
import { GoGitPullRequest } from 'react-icons/go';
import { RiWindyFill } from 'react-icons/ri';
import { SiRainmeter } from 'react-icons/si';
import { IoMdSunny } from 'react-icons/io';
import { IoRainy } from 'react-icons/io5';
import { IoPartlySunnyOutline } from 'react-icons/io5';
import { FaCloudSunRain } from 'react-icons/fa';
import { BsFillCloudLightningRainFill } from 'react-icons/bs';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState('FRI');
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredDay, setHoveredDay] = useState(null);
  const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUES', 'WED', 'THUR'];
  const handleDayHover = (day) => {
    setHoveredDay(day);
  };
  const navigateDay = (direction) => {
    if (direction === 'prev') {
      setStartIndex((prevIndex) =>
        prevIndex === 0 ? days.length - 4 : prevIndex - 1
      );
    } else {
      setStartIndex((prevIndex) =>
        prevIndex === days.length - 4 ? 0 : prevIndex + 1
      );
    }
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  // Image URLs for each day
  const imageUrls = {
    FRI: <IoRainy />,
    SAT: <IoMdSunny />,
    SUN: <IoPartlySunnyOutline />,
    MON: <FaCloudSunRain />,
    TUES: <BsFillCloudLightningRainFill />,
    WED: <IoPartlySunnyOutline />,
    THUR: <BsFillCloudLightningRainFill />,
  };

  return (
    <div className="flex flex-col   mb-6 rounded-lg shadow-lg px-4 bg-[#e5ebed]  border-solid border border-white border-2   ">
      <div className="flex  mt-4">
        <button
          className="mr-6 font-bold text-lg text-black"
          onClick={() => navigateDay('prev')}
        >
          {'<'}
        </button>
        <div className="text-lg font-normal text-black ">
          {days.slice(startIndex, startIndex + 5).join(' ')}
        </div>
        <button
          className="ml-6 font-bold text-lg text-black "
          onClick={() => navigateDay('next')}
        >
          {'>'}
        </button>
      </div>
      <div className="  flex flex-row   m-2 w-64">
        {days.slice(startIndex, startIndex + 5).map((day, index) => (
          <div
            key={index}
            className={`flex flex-row items-center  cursor-pointer ${
              (day === selectedDay || day === hoveredDay) && 'font-bold'
            }`}
            onClick={() => handleDayClick(day)}
            onMouseEnter={() => handleDayHover(day)}
            onMouseLeave={() => setHoveredDay(null)}
          >
            {/* <div>{day}</div> */}
            <div className="mt-0 text-black  mx-2 w-[30px] h-[30px]">
              {imageUrls[day]}
            </div>
          </div>
        ))}
      </div>
      <div className=" rounded-lg p-4 m-2 w-64">
        {/* Render the data of the selected day here */}
        {/* <div className="text-lg font-bold">{selectedDay}</div> */}
        <div className="text-sm ml-10 items-center flex flex-row text-black">
          {' '}
          {<GoClockFill className="mr-4 text-black" />}3:00PM
        </div>
        <div className="text-sm font-semibold mt-2 text-black">
          AIR CONDITIONS
        </div>
        <div className="flex flex-col  mt-2">
          <div className="flex  flex flex-col mt-4">
            <div className="text-sm mr-1 items-center flex flex-row  text-bold  text-black ">
              {<GoGitPullRequest className="mr-2 text-bold text-xl " />}Real
              Feel
            </div>
            <div className="text-black text-bold ">30°</div>
          </div>
          <div className="flex  flex-col mt-4">
            <div className="text-sm mr-1 text-black text-bold flex flex-row  ">
              {' '}
              {<RiWindyFill className="mr-2 text-bold text-xl" />}Wind
            </div>
            <div className="text-black text-bold ">0.8 km/hr</div>
          </div>
          <div className="flex flex-col mt-4">
            <div className="text-sm mr-1 text-black text-bold flex flex-row ">
              {<SiRainmeter className="mr-2 text-bold text-xl" />}Chance of rain
            </div>
            <div className="text-black text-bold ">2%</div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm mr-1 text-black text-bold flex flex-row">
              {<IoMdSunny className="mr-2 text-bold text-xl" />}UV Index
            </div>
            <div className="text-black text-bold ">4</div>
          </div>
        </div>
        <div className="flex justify-between mt-2"></div>
      </div>
    </div>
  );
};

export default Calendar;
