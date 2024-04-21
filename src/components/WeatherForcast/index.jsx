import { useState } from 'react';

const WeatherForecast = () => {
  const [selectedCountry, setSelectedCountry] = useState('New York');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className=" px-6 py-2 h-full shadow-md  lg:w-[50%]  md:w-[700px] mx-auto mt-6 lg:mt-0 rounded-lg bg-[#e5ebed]   border-solid border border-white border-2 w-[140%]">
      <div className="flex ml-2  space-x-4 bg-[#e5ebed] px-2 py-2">
        <button
          onClick={() => handleCountryChange('New York')}
          className={`text-black text-sm btn  font-semibold ${
            selectedCountry === 'New York' ? 'btn-active' : ''
          }`}
        >
          New York
        </button>

        <button
          onClick={() => handleCountryChange('Hongkong')}
          className={`text-black text-sm btn ${
            selectedCountry === 'Hongkong' ? 'btn-active' : ''
          }`}
        >
          Hongkong
        </button>
        <button
          onClick={() => handleCountryChange('Tokyo')}
          className={`text-black text-sm btn ${
            selectedCountry === 'Tokyo' ? 'btn-active' : ''
          }`}
        >
          Tokyo
        </button>
      </div>
      <hr className="text-black h-1 w-full px-2" />
      <WeatherForecastCard location={selectedCountry} />
    </div>
  );
};

const WeatherForecastCard = ({ location }) => {
  const weatherData = {
    'New York': [
      {
        day: 'Today (Sun)',
        date: 'Mar 6',
        weather: 'Sunny',
        temperature: '15-20°C',
        aqi: 67,
        img: 'https://cdn.iconscout.com/icon/free/png-256/free-sun-bright-rays-sunny-weather-33960.png',
      },
      {
        day: 'Mon',
        date: 'Mar 7',
        weather: 'Cloudy',
        temperature: '16-22°C',
        aqi: 71,
        img: 'https://cdn-icons-png.flaticon.com/512/164/164806.png',
      },
      {
        day: 'Tue',
        date: 'Mar 8',
        weather: 'Lightning',
        temperature: '17-20°C',
        aqi: 65,
        img: 'https://static.vecteezy.com/system/resources/previews/024/194/510/original/lighting-bolt-with-cloud-icon-in-yellow-and-blue-color-vector.jpg',
      },
      {
        day: 'Wed',
        date: 'Mar 9',
        weather: 'Heavy rain',
        temperature: '16-21°C',
        aqi: 70,
        img: 'data:image/jpeg;base64,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',
      },
    ],
    Hongkong: [
      {
        day: 'Today (Sun)',
        date: 'Mar 6',
        weather: 'Sunny',
        temperature: '15-20°C',
        aqi: 67,
        img: 'https://cdn.iconscout.com/icon/free/png-256/free-sun-bright-rays-sunny-weather-33960.png',
      },
      {
        day: 'Mon',
        date: 'Mar 7',
        weather: 'Cloudy',
        temperature: '16-22°C',
        aqi: 71,
        img: 'https://cdn-icons-png.flaticon.com/512/164/164806.png',
      },
      {
        day: 'Tue',
        date: 'Mar 8',
        weather: 'Lightning',
        temperature: '17-20°C',
        aqi: 65,
        img: 'https://static.vecteezy.com/system/resources/previews/024/194/510/original/lighting-bolt-with-cloud-icon-in-yellow-and-blue-color-vector.jpg',
      },
      {
        day: 'Wed',
        date: 'Mar 9',
        weather: 'Heavy rain',
        temperature: '16-21°C',
        aqi: 70,
        img: 'data:image/jpeg;base64,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',
      },
    ],
    Tokyo: [
      {
        day: 'Today (Sun)',
        date: 'Mar 6',
        weather: 'Sunny',
        temperature: '15-20°C',
        aqi: 67,
        img: 'https://cdn.iconscout.com/icon/free/png-256/free-sun-bright-rays-sunny-weather-33960.png',
      },
      {
        day: 'Mon',
        date: 'Mar 7',
        weather: 'Cloudy',
        temperature: '16-22°C',
        aqi: 71,
        img: 'https://cdn-icons-png.flaticon.com/512/164/164806.png',
      },
      {
        day: 'Tue',
        date: 'Mar 8',
        weather: 'Lightning',
        temperature: '17-20°C',
        aqi: 65,
        img: 'https://static.vecteezy.com/system/resources/previews/024/194/510/original/lighting-bolt-with-cloud-icon-in-yellow-and-blue-color-vector.jpg',
      },
      {
        day: 'Wed',
        date: 'Mar 9',
        weather: 'Heavy rain',
        temperature: '16-21°C',
        aqi: 70,
        img: 'data:image/jpeg;base64,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',
      },
    ],
  };

  const daysWeather = weatherData[location];

  return (
    <div className="flex flex-row items-center ">
      {/* <h2 className="text-lg font-semibold">{location}</h2> */}
      {daysWeather.map((day, index) => (
        <div key={index} className=" p-2 ">
          <h3 className="text-sm text-black">{day.day}</h3>
          <div className="text-sm mb-2 text-black">{day.date}</div>
          <div className="rounded-full w-[50px] h-[50px]  mb-2">
            <img src={day.img} alt="" />
          </div>

          <div className="text-sm text-black">{day.weather}</div>
          <div className="text-sm text-black">{day.temperature}</div>
          <div className="text-sm text-black">{`AQI ${day.aqi}`}</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
