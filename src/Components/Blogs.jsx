import card1 from "../assets/BlogImg/card1.png";
import card2 from "../assets/BlogImg/card2.png";
import card3 from "../assets/BlogImg/card3.png";

import email from "../assets/svg/BlogSvg/email.svg";
const Blogs = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="w-full md:w-[316px] h-auto md:h-[62px] font-poppins font-semibold text-[24px] md:text-[44px] leading-tight md:leading-[61.6px] text-[#332C5C] text-center">
          Read our blog
        </p>
        <p className="w-full md:w-[660px] h-auto md:h-[64px] font-nSans font-normal text-[16px] md:text-[18px] leading-normal md:leading-[32.4px] text-center text-[#5E587A] mt-4 md:mt-0">
          Frontegg dramatically sped our go-to-market by cutting our up-front
          development time
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center mt-10">
        <p className="w-full md:w-[347px] h-auto md:h-[50px] font-poppins font-semibold text-[20px] md:text-[26px] leading-tight md:leading-[50.4px] text-[#332C5C] text-center md:text-left mb-6 md:mb-0">
          Most popular posts
        </p>
        <div className="flex gap-2">
          <svg
            width="30"
            height="30"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="56"
              height="56"
              rx="15"
              transform="matrix(-1 0 0 1 56 0)"
              fill="#8976FD"
              fillOpacity="0.2"
            />
            <path
              d="M31.5 21L24.5 28L31.5 35"
              stroke="#8976FD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[16px] text-center text-[#8976FD]">1 2 3 . .</p>
          <svg
            width="30"
            height="30"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="56" rx="15" fill="#8976FD" />
            <path
              d="M24.5 21L31.5 28L24.5 35"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
        <div className="w-full md:w-[370px] py-4 px-8">
          <img
            src={card1}
            className="rounded-md shadow-md mb-4 w-full"
            alt="Card 1"
          />
          <div className="flex flex-row justify-between text-[#5E587A]">
            <p>Random</p>
            <p>24 nov, 2021</p>
          </div>
          <p className="font-poppins font-semibold text-[20px] leading-[38.4px] text-[#332C5C] my-2">
            Weekly roundup SaaS global SaaS
          </p>
          <button className="w-full md:w-[120px] h-[50px] rounded-lg bg-[#8876fd1f] font-nSans font-bold text-2 leading-6 text-[#8876fd]">
            Read more
          </button>
        </div>

        <div className="w-full md:w-[370px] py-4 px-8">
          <img
            src={card2}
            className="rounded-md shadow-md mb-4 w-full"
            alt="Card 2"
          />
          <div className="flex flex-row justify-between text-[#5E587A]">
            <p>Random</p>
            <p>24 nov, 2021</p>
          </div>
          <p className="font-poppins font-semibold text-[20px] leading-[38.4px] text-[#332C5C] my-2">
            Weekly roundup SaaS global SaaS
          </p>
          <button className="w-full md:w-[120px] h-[50px] rounded-lg bg-[#8876fd1f] font-nSans font-bold text-2 leading-6 text-[#8876fd]">
            Read more
          </button>
        </div>

        <div className="w-full md:w-[370px] py-4 px-8">
          <img
            src={card3}
            className="rounded-md shadow-md mb-4 w-full"
            alt="Card 3"
          />
          <div className="flex flex-row justify-between text-[#5E587A]">
            <p>Random</p>
            <p>24 nov, 2021</p>
          </div>
          <p className="font-poppins font-semibold text-[20px] leading-[38.4px] text-[#332C5C] my-2">
            Weekly roundup SaaS global SaaS
          </p>
          <button className="w-full md:w-[120px] h-[50px] rounded-lg bg-[#8876fd1f] font-nSans font-bold text-2 leading-6 text-[#8876fd]">
            Read more
          </button>
        </div>
      </div>

      <div className="md:m-auto flex flex-col justify-center md:w-fit bg-[#8976FD] p-6  md:p-10 my-10 md:my-20 mx-4 h-auto md:h-[370px] rounded-xl">
        <div>
          <p className="font-poppins mx-auto w-full md:w-4/5 font-semibold text-[24px] md:text-[30px] leading-tight md:leading-7 text-center m-4">
            Subscribe to Our Newsletter & get the Coupon code.
          </p>
          <p className="font-nSans font-normal text-[12px] md:text-4 leading-tight md:leading-4 opacity-70 text-center">
            All your information is completely confidential
          </p>
        </div>
        <div className="md:mx-auto pt-5">
          <div className="relative bg-white p-2 rounded-2xl shadow-lg flex items-center">
            <div className="absolute left-4">
              <img src={email} alt="Email Icon" />
            </div>
            <input
              type="email"
              placeholder="Type your email"
              className="font-nSans pl-10 pr-4 py-2 w-64 font-normal text-[12px] border-none focus:outline-none text-gray-500"
            />
            <button className="md:ml-4 font-nSans bg-orange-500 font-semibold text-[14px] text-white py-2 md:px-4 px-2 rounded-xl focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
