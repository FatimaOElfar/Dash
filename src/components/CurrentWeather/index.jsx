import React from 'react';

const CurrentWeather = () => {
  return (
    <div className=" rounded-lg shadow-lg py-2 bg-[#e5ebed] px-8 border-solid border mx-auto border-white border-2 lg:h-[200px] md:w-[700px] h-[300px] lg:w-[60%]  w-[140%] ">
      <h2 className="text-lg  text-black font-semibold mb-2">
        Current Weather
      </h2>
      <div className="flex flex-col">
        <div className="  items-center mb-2">
          <div className=" text-sm text-black ml-4">3:00 PM</div>
          <div className="text-lg flex flex-row items-center ml-6  ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3WqwkA0d2YpT6zKw3wfBBioa_QJp_Nsypg&usqp=CAU"
              alt=""
              className="rounded-full w-[50px] h-[50px]"
            />
            <h1 className="text-2xl text-black">
              25°C <span className="text-sm ">Cloudy</span>{' '}
            </h1>{' '}
          </div>
        </div>
        {/* <div className="text-lg mb-2 text-black">Cloudy</div> */}
        <div className="text-sm text-black">
          There will be mostly sunny. The high will be 25°C
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
