import React from 'react';
import styles from './home.module.css';
import {
  CurrentWeather,
  WeatherForcast,
  Calender,
  ChartWeather,
} from '@/components';
import { Header, Footer, Navbar } from '@/layout';

const index = () => {
  return (
    <div className="bg-[#c3d8e1]">
      <div className="w-[95%] mx-auto   ">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-between   mt-10 w-full mx-auto overflow-hidden">
          <div className="flex flex-col lg:flex-col lg:space-y-8   w-[70%]  lg:w-2/3   lg:mx-0">
            <div className="weather lg:flex lg:flex-row gap-[10px]  lg:justify-between lex flex-col lg:flex-row    ">
              <CurrentWeather />
              <WeatherForcast />
            </div>
            <div className="chart flex flex-col mt-6 ">
              <ChartWeather />
            </div>
          </div>
          <div>
            <Calender className="lg:w-1/3 mt-4" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
