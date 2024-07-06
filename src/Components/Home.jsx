import firstSvg from "../assets/svg/HomeSvg/1st.svg";
import img1 from "../assets/svg/FunfactSvg/img1.svg";
import img2 from "../assets/svg/FunfactSvg/img2.svg";
import img3 from "../assets/svg/FunfactSvg/img3.svg";

import image1 from "../assets/svg/2focustSvg/img1.svg";
import image2 from "../assets/svg/2focustSvg/img2.svg";
import image3 from "../assets/svg/2focustSvg/img3.svg";
import image4 from "../assets/svg/2focustSvg/img4.svg";

import section3 from "../assets/svg/HomeSvg/3sec.svg";
import section3_2 from "../assets/svg/HomeSvg/3_2sec.svg";

import map from "../assets/svg/country/map.svg";
import flag from "../assets/svg/country/flag.svg";

import trophy from "../assets/svg/ReaviewSvg/trophy.svg";
import team from "../assets/svg/ReaviewSvg/team.svg";

import Blogs from "./Blogs";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-0">
        <div className="w-full md:w-[400px] h-auto md:h-[414px] md:ml-[200px] mt-[20px] md:mt-[200px] rounded-tl-lg p-4">
          <p className="text-[#332C5C] font-poppins font-black text-[24px] md:text-[40px] leading-8 md:leading-12 text-center md:text-left">
            Committed To People Committed To The Future
          </p>
          <p className="opacity-80 font-normal text-base leading-6 my-4 text-center md:text-left">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            congue magna at
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#8976FD] h-[50px] w-[150px] rounded-lg text-center text-white font-semibold font-nSans">
              Get Started now
            </button>
          </div>
        </div>

        <div className="w-full md:w-auto mt-4 md:mt-0">
          <img src={firstSvg} alt="Illustration" className="w-full md:w-auto" />
        </div>
      </div>

      {/* fun fact */}

      <div className="flex flex-col md:flex-row w-full md:w-3/5 mx-auto gap-8 md:gap-12 h-auto md:h-[200px] items-center py-8 md:py-0">
        <div className="flex items-center md:items-start">
          <img
            src={img1}
            alt="Icon 1"
            className="w-12 h-12 md:w-auto md:h-auto"
          />
          <div className="py-4 md:py-8 ml-4 md:ml-0">
            <p className="font-poppins font-semibold text-2xl md:text-xl my-2">
              15k+
            </p>
            <p className="font-normal font-nSans text-base md:text-[15px] leading-4 text-[#5E587A]">
              Active user
            </p>
          </div>
        </div>

        <div className="flex items-center md:items-start">
          <img
            src={img2}
            alt="Icon 2"
            className="w-12 h-12 md:w-auto md:h-auto"
          />
          <div className="py-4 md:py-8 ml-4 md:ml-0">
            <p className="font-poppins font-semibold text-2xl md:text-xl my-2">
              30k
            </p>
            <p className="font-normal font-nSans text-base md:text-[15px] leading-4 text-[#5E587A]">
              Total Download
            </p>
          </div>
        </div>

        <div className="flex items-center md:items-start">
          <img
            src={img3}
            alt="Icon 3"
            className="w-12 h-12 md:w-auto md:h-auto"
          />
          <div className="py-4 md:py-8 ml-4 md:ml-0">
            <p className="font-poppins font-semibold text-2xl md:text-xl my-2">
              10k
            </p>
            <p className="font-normal font-nSans text-base md:text-[15px] leading-4 text-[#5E587A]">
              Customer
            </p>
          </div>
        </div>
      </div>

      {/* we are focus on the ultimate  */}
      <div className="flex flex-col lg:flex-row items-center h-fit justify-between my-10 px-4 lg:px-0">
        <div className="lg:ml-[300px] w-full lg:w-[350px] p-4 gap-6 flex flex-col items-stretch">
          <div>
            <p className="font-poppins font-bold text-[20px] lg:text-[30px] leading-8 text-[#332C5C] mb-2 text-center lg:text-left">
              We Are Focused On Your Ultimate Goal
            </p>
            <p className="font-nSans font-normal text-[12px] leading-4 text-[#494369] text-center lg:text-left">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at pretium
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-8">
            <div>
              <div className="flex items-center gap-3 bg-white shadow-sm w-full lg:w-[230px] rounded-md p-2">
                <img
                  src={image1}
                  className="shadow rounded-xl w-12 h-12 lg:w-auto lg:h-auto"
                  alt=""
                />
                <div>
                  <p className="font-poppins font-bold text-[12px] leading-5 text-[#332C5C]">
                    Automatic Time Tracking
                  </p>
                  <p className="font-nSans font-normal text-[8px] leading-5 text-[#5E587A]">
                    Time Tracking has never been easier.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 bg-white shadow-sm w-full lg:w-[230px] rounded-md p-2">
                <img
                  src={image2}
                  className="shadow rounded-xl w-12 h-12 lg:w-auto lg:h-auto"
                  alt=""
                />
                <div>
                  <p className="font-poppins font-bold text-[12px] leading-5 text-[#332C5C]">
                    Customizable Dashboard
                  </p>
                  <p className="font-nSans font-normal text-[8px] leading-5 text-[#5E587A]">
                    Time Tracking has never been easier.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 bg-white shadow-sm w-full lg:w-[230px] rounded-md p-2">
                <img
                  src={image3}
                  className="shadow rounded-xl w-12 h-12 lg:w-auto lg:h-auto"
                  alt=""
                />
                <div>
                  <p className="font-poppins font-bold text-[12px] leading-5 text-[#332C5C]">
                    Statistics Retroactively
                  </p>
                  <p className="font-nSans font-normal text-[8px] leading-5 text-[#5E587A]">
                    Time Tracking has never been easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 w-full lg:w-auto">
          <img
            src={image4}
            className="shadow h-[300px] lg:h-[500px] rounded-xl mx-auto lg:mx-0"
            alt=""
          />
        </div>
      </div>

      {/* Know more about our key features */}

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-between my-10 px-4 lg:px-0">
        <div className="relative w-full lg:w-[500px] h-[300px] lg:h-[500px]">
          <img
            src={section3}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col w-full lg:w-[300px] gap-6 lg:gap-10 mt-8 lg:mt-0">
          <p className="text-[#332C5C] font-bold text-[20px] lg:text-[25px] leading-6 lg:leading-7 font-poppins text-center lg:text-left">
            Know More About Our Key Features
          </p>
          <p className="font-normal text-[12px] leading-4 font-nSans text-[#5E587A] text-center lg:text-left">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            congue magna at pretium
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#8976FD] w-[100px] rounded-lg p-3 font-nSans font-semibold leading-3 text-white text-[12px]">
              Start Trial
            </button>
          </div>
        </div>

        <div className="w-full lg:w-auto mt-8 lg:mt-0">
          <img
            src={section3_2}
            alt=""
            className="mx-auto lg:mx-0 w-full md:h-full h-[100px] lg:w-auto"
          />
        </div>
      </div>

      {/* country */}
      <div className="py-10">
        <div className="w-full md:w-3/5 mx-auto font-poppins font-bold text-[24px] md:text-[35px] leading-tight text-center text-[#332C5C] mt-10 md:mt-20">
          We Have Support Language For More Than 30 Languages Around The World
        </div>

        <div className="w-full md:w-4/5 mx-auto relative mt-10">
          <img
            src={map}
            alt="World Map"
            className="w-full h-auto object-cover opacity-80"
          />
          <img
            src={flag}
            alt="Flags"
            className="top-0 left-0 w-full h-auto object-cover opacity-100 absolute"
          />
        </div>
      </div>

      {/* review  */}

      <div className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[600px] gap-10 lg:gap-0 px-4 lg:px-0 py-10">
        <img src={trophy} alt="Trophy" className="w-full h-[130px] lg:w-auto md:h-auto" />

        <div className="font-poppins w-full lg:w-[400px] text-center lg:text-left">
          <p className="font-bold text-[24px] lg:text-[36px] leading-8 text-[#332C5C] mb-2">
            See our success stories
          </p>
          <p className="font-semibold text-[16px] lg:text-[20px] leading-6 text-[#404040] opacity-80 mb-4">
            Frontegg dramatically sped our go-to-market by cutting our up-front
            development time
          </p>
          <p className="font-bold text-[14px] lg:text-[16px] leading-5 text-[#332C5C] mb-1">
            Jhon Kelaven
          </p>
          <p className="font-nSans font-normal text-[12px] leading-4 text-[#5E587A]">
            Creative designer
          </p>
        </div>

        <img src={team} alt="Team" className="w-full lg:w-auto h-auto" />
      </div>

      <Blogs />
    </div>
  );
};

export default Home;
