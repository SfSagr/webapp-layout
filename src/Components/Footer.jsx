
import { Link } from "react-router-dom";
import logo from "../assets/svg/NavSvg/logo.svg";
import Name from "../assets/svg/NavSvg/name.svg";

import img1 from "../assets/svg/FootSvg/img1.svg";
import img2 from "../assets/svg/FootSvg/img2.svg";
import img3 from "../assets/svg/FootSvg/img3.svg";

const Footer = () => {
return (
    <div className="bg-purple-200 bg-opacity-10">
        <div className="flex flex-col md:flex-row justify-around p-4">
            <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="mr-2" />
                <img src={Name} alt="Name" />
            </div>
            <div className="text-[#494369] w-[280px] h-[144px] font-nSans font-normal text-base leading-[30px] my-2 text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.
            </div>
            <div className="flex gap-2">
                <img src={img1} alt="icon1" />
                <img src={img2} alt="icon2" />
                <img src={img3} alt="icon3" />
            </div>
            </div>
            <div className="flex flex-col md:flex-row justify-around gap-8 md:gap-16 mt-4 md:mt-0">
            <div className="footer-grid-column flex flex-col items-center md:items-start">
                <div className="font-poppins font-semibold text-2xl leading-[38.4px] text-[#332C5C]">
                Our Link
                </div>
                <ul className="font-normal text-base leading-[36px] text-[#494369] text-center md:text-left">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="about" className="footer-link">About</Link></li>
                <li><Link to="service" className="footer-link">Service</Link></li>
                <li><Link to="team" className="footer-link">Team</Link></li>
                <li><Link to="blog" className="footer-link">Blog</Link></li>
                </ul>
            </div>
            <div className="footer-grid-column flex flex-col items-center md:items-start">
                <div className="font-poppins font-semibold text-2xl leading-[38.4px] text-[#332C5C]">
                Our Service
                </div>
                <ul className="font-normal text-base leading-[36px] text-[#494369] text-center md:text-left">
                <li><Link to="#overview" className="footer-link">Strategy & Research</Link></li>
                <li><Link to="#overview" className="footer-link">Web Development</Link></li>
                <li><Link to="#overview" className="footer-link">Web Solution</Link></li>
                <li><Link to="#overview" className="footer-link">Digital Marketing</Link></li>
                <li><Link to="#overview" className="footer-link">App Design</Link></li>
                </ul>
            </div>
            <div className="footer-grid-column flex flex-col items-center md:items-start">
                <div className="font-poppins font-semibold text-2xl leading-[38.4px] text-[#332C5C]">
                Others Link
                </div>
                <ul className="font-normal text-base leading-[36px] text-[#494369] text-center md:text-left">
                <li><Link to="#overview" className="footer-link">FAQ</Link></li>
                <li><Link to="#overview" className="footer-link">Portfolio</Link></li>
                <li><Link to="#overview" className="footer-link">Privacy Policy</Link></li>
                <li><Link to="#overview" className="footer-link">Terms & Condition</Link></li>
                <li><Link to="#overview" className="footer-link">Support</Link></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between p-4 md:p-12 mx-4 md:mx-20 font-normal text-base leading-[32.4px] bg-[rgba(94, 88, 122, 1)] text-white text-center md:text-left">
            <p className="mb-2 md:mb-0">Terms & Condition</p>
            <p>All Right Reserved</p>
        </div>
        </div>
);
}

export default Footer;
