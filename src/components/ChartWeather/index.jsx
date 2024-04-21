import image from '@/assets/24hrs.png';
const ChartWeather = () => {
  return (
    <div className="h-[250px] lg:w-[100%]  rounded md:w-[135%] w-[140%] ">
      <img
        src={image}
        alt="weather photo"
        className="border-solid border-2 border-[#fff] bg-[#e5ebed] rounded  lg:w-full w-[100%] p-4  md:w-[100vw]  h-[200px]"
      />
    </div>
  );
};

export default ChartWeather;
