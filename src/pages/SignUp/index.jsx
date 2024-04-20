import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { SiInstagram } from 'react-icons/si'; // Import Instagram icon from React Icons
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

// import { toast } from 'react-toastify';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
  ];
  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(
      (prevShowLanguageDropdown) => !prevShowLanguageDropdown
    );
  };
  //
  return (
    <div className="w-full flex-row h-[100%] ">
      <section className="h-screen flex flex-col lg:flex-row justify-center space-y-10 md:space-y-0  items-center my-2  mx-0 md:mx-0 md:my-0">
        <div className="md:w-1/3 w-full max-w-screen-md relative h-full ">
          <img
            src="./src/assets/image.png"
            alt="Sample image"
            className="w-full lg:h-screen h-[600px] "
          />
          <div className="absolute  left-4 lg:top-6 top-[50%]">
            <h1 className="font-bold text-black text-2xl  mb-2">
              Join to our community
            </h1>
            <p className=" text-gray-600 text-sm md:text-xl font-normal mb-4 w-[300px] h-[100px]">
              "Sunshine is delicious, rain is refreshing, wind braces up, snow
              is exhilarating; there is no such thing as bad weather, only
              different kinds of good weather."
            </p>
          </div>
        </div>
        <div className="w-full h-full max-w-screen-md   bg-white rounded-2xl shadow-xl">
          <div className="flex justify-end items-center pr-4 pt-2">
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="border-0  rounded-md px-3 py-1 text-xl flex items-center"
              >
                {languages.find((lang) => lang.code === selectedLanguage).name}
                <IoMdArrowDropdown className="ml-1 text-xl" />
              </button>
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguage(lang.code);
                        setShowLanguageDropdown(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <h1 className="text-xl text-black font-bold py-4 px-4">
            {selectedLanguage === 'en' ? 'Create Account' : 'Créer un compte'}
          </h1>
          <form className=" w-full max-w-screen-md  px-2 py-4 ">
            <input
              className="text-sm w-full px-4 py-2 border bg-[#FCF7E8] border-solid border-0 h-[44px]  rounded mb-4 rounded-xl "
              type="text"
              placeholder="Full Name"
            />
            <input
              className="text-sm w-full px-4 py-2 bg-[#FCF7E8]  border-solid border-0 h-[44px]  rounded mb-4 rounded-xl"
              type="text"
              placeholder="Email Address"
            />
            <div className="relative">
              <input
                className="text-sm  w-full px-4 py-2 bg-[#FCF7E8]  border-solid border-0 h-[44px]  rounded mb-4 rounded-xl"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <div
                className="absolute right-3 top-1/2  transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>
            <div className="mx-auto  items-center  mt-4">
              {' '}
              <Link to="/">
                <button className="lg:px-24 px-8 font-normal lg:w-full lg:ml-0 ml-[10%]    w-[500px]  mx-auto text-xl py-3 text-center items-center border-0 outline-none border-2 rounded-full bg-[#0FB3BB] text-white ">
                  Sign Up
                </button>
              </Link>
            </div>

            <div className="text-center md:text-left ">
              <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                  Or Sign up with
                </p>
              </div>

              <div className="flex flex-row justify-center px-8">
                <button
                  type="button"
                  className="inlne-block  h-9 w-9 rounded-full mx-8   uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                  <img
                    src="data:image/png;base64,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"
                    alt="Google icon"
                    className="w-10 h-10 mr-2   rounded-full"
                  />
                </button>
                <button
                  type="button"
                  className=" h-9 w-9  mx-8 rounded-full text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEU6VZ////80UZ309vqToMfM0uQyT5xbcK0uTZyXpMu5wNna3eni5fB0hLdida5SaqogRJjq7PRNZaehq80oSZpAW6NqfbN7i7qwudW+xdzGzeERPJRIYKSpss+LmcTU2OfuBL5hAAAC6klEQVR4nO3c23KrIACFYYuKxmM8RGu2ie//lm3vOtNNQDLA0ln/fWf4xgNGsFHEGGOMMcYYY4wxxtj5EkLmL5Khx2eaGK+juPXZVKubbqFHaVR+jebHZ7Hct7JS1qWtCD1QbfJfPhdbF3/oqjL0Ey2X02IAOQImF3VqBDkARtaLMQUbI0RTdDssyBhxe5Z7KMgYuQ67DgsyRrafZrewA2DEZH4TQ8fIZuflAoyR62ZhAcWMe2YXcMz1YWWBxIyJnQURk9d75xdcjOzvlhZATPTcPVnCYkRrMVuiYvKL9YGBw8jMarrExIyDvQUNI+xvZXiYvLa/YuAw0TtnGRjmvbMMDTPZPskAYqLknUvmo4PC3ArDYcfVlv6t6IHeNYvV7FGmHOYma//Whwb8TvQmv/y7pI+klOI/hQb8TrSVwWHJJNSglTV6TNrnoUdpltT/xiyng1giOevuzPEl9BiNk9ppJs2Ocb18J3SYeDjGEuxPWkw3H+bA6DHVYS5/A8zWID18vU6LSaGeJF9HDGrEoEYMasSgRgxqxKBGDGrEoEYMasQETvnZyKjHjK8+OfH/Uk2s80VRotsAWA2J6m9/arxrpMG6hWVP768I7TbGGjWfCFNN3m8P7jCb//UOd5i7/5Vzd5jCN8Ul5uF/nnGHGU6EiZ/+n3WcYar5RJhyOtFpFmCacYe5ryfCLLfzYOJHgA0PzjAhttW4wnTPALs3XGGq+kyYELs3XGG29kSYJcQ+YEeY+HP1b3GGGQJYnGGSEPvqXGH8v2dyh+nqE2HKIJsEHWHuIaYZV5giwA8AZ5gA75kiZ6sAjzEERrRDoUr39Wy3KP80yJ35O+XK11X3wXnaXg/zj9q0HzYArmkqO+ICrTJiUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY155gvTt5IUAsJbbkAAAAASUVORK5CYII="
                    alt="Google icon"
                    className="w-10 h-10 mr-2  rounded-full"
                  />
                </button>
                <button
                  type="button"
                  className="inlne-block mx-1 h-9 w-9 rounded-full mx-8  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg"
                    alt="Instagram icon"
                    className="w-10 h-10 mr-2 rounded-full"
                  />
                </button>
              </div>
            </div>

            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Already have an account ?{' '}
              <a
                className="text-black hover:underline hover:underline-offset-4"
                href="#"
              >
                Log In
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
