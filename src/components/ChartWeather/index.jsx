import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { GoClockFill } from 'react-icons/go';

const ChartWeather = () => {
  //   const data = [
  //     { x: 0, y: 25 },
  //     { x: 5, y: 22 },
  //     { x: 6, y: 23 },
  //     { x: 7, y: 22 },
  //     { x: 8, y: 23 },
  //     { x: 9, y: 18 },
  //     { x: 9, y: 18 },
  //   ];

  //   const labels = data.map((item) => item.x);
  //   const values = data.map((item) => item.y);

  //   const chartData = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         data: values,
  //       },
  //     ],
  //   };

  //   const options = {
  //     scales: {
  //       x: {
  //         title: {
  //           //   display: true,
  //           text: 'Time',
  //         },
  //         suggestedMin: 0, // Adjust as needed
  //         suggestedMax: 18,
  //       },
  //       y: {
  //         title: {
  //           display: true,
  //           //   text: 'Temperature',
  //         },
  //         suggestedMin: 0, // Adjust as needed
  //         suggestedMax: 9,
  //       },
  //     },
  //   };

  return (
    <div className="h-[250px] w-[100%] mt-4 mx-auto">
      {/* {' '}
        
      <Line data={chartData} options={options} /> */}
      <img
        src="./src/assets/24hrs forecast.png"
        alt=""
        className="border-solid border-2 border-white  lg:w-full w-[100%] mt-4 md:ml-6  h-[200px]"
      />
    </div>
  );
};

export default ChartWeather;
