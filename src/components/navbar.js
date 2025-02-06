import React, { useState} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import logo from "../assets/bitejoy.svg";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMiddleLayerVisible, setIsMiddleLayerVisible] = useState(true);

  const handleMenuClick = () => {
    if (!isMenuOpen) {
      // When opening: hide middle layer first, then show modal
      setIsMiddleLayerVisible(false);
      setTimeout(() => {
        setIsMenuOpen(true);
      }, 300); // Wait for animation to complete
    } else {
      // When closing: hide modal first, then show middle layer
      setIsMenuOpen(false);
      setTimeout(() => {
        setIsMiddleLayerVisible(true);
      }, 100);
    }
  };

  const BurgerSvg = ({ showMiddleLayer }) => (
    <div className="relative w-full h-full">
      {/* Top layer */}
      <svg className="absolute top-0 left-0 w-10 h-10" viewBox="0 0 1185 549" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(clip0_top)">
          <path d="M1159.43 520.657C1161.25 535.694 1149.52 548.939 1134.37 548.939H33.6332C18.4868 548.939 6.75006 535.694 8.5727 520.657C87.5022 -130.443 1080.49 -130.443 1159.43 520.657Z" fill="black" stroke="black" strokeWidth="10" />
          <path d="M67.8492 473.596C65.1221 485.756 74.5161 497.319 86.9778 497.319H1081.01C1093.48 497.319 1102.87 485.756 1100.14 473.596C982.662 -50.1978 185.325 -50.1978 67.8492 473.596Z" fill="F9AA3B" />
        </g>
        <defs>
          <clipPath id="clip0_top">
            <rect width="1185" height="549" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {/* Middle layer - with animation */}
      <svg
        className={`absolute top-3 left-0 w-10 h-10 transition-all duration-300 ${showMiddleLayer ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-0'
          }`}
        viewBox="0 0 1172 231"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M114.352 8.43507H1057.64C1199.39 8.43507 1199.39 224.144 1057.64 224.144H114.352C-27.4064 224.144 -27.4064 8.43507 114.352 8.43507Z" fill="010101" stroke="black" strokeWidth="10" />
        <path d="M1057.64 59.0749H114.353C39.1871 59.0749 39.1871 173.495 114.353 173.495H1057.64C1132.81 173.495 1132.81 59.0749 1057.64 59.0749Z" fill="F04521" />
      </svg>
      {/* Bottom layer */}
      <svg className="absolute top-5 left-0 w-10 h-10" viewBox="0 0 1185 347" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1170.49 39.9303V81.5968C1170.49 221.408 1056.2 335.712 916.376 335.712H265.616C125.794 335.712 11.4941 221.408 11.4941 81.5968V74.6192C11.4941 41.4821 38.3571 14.6192 71.4941 14.6192H1145.18C1159.16 14.6192 1170.49 25.9513 1170.49 39.9303Z" fill="black" stroke="black" strokeWidth="10" />
        <path d="M1119.86 83.5952C1119.86 74.5693 1112.54 67.2523 1103.52 67.2523H78.4797C69.4537 67.2523 62.1367 74.5693 62.1367 83.5952C62.1367 195.469 153.749 287.079 265.619 287.079H916.376C1028.25 287.079 1119.86 195.469 1119.86 83.5952Z" fill="F9AA3B" />
      </svg>
    </div>
  );

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <Link href="/">
          <img src={logo} alt="Logo" className="h-8 w-full px-5" />
        </Link>
      </div>

      {/* Right Section (Shopping Cart Icon + Button) */}
      <div className="flex items-center space-x-4">
        <FaShoppingCart className="text-white text-2xl" />
        <button
          onClick={handleMenuClick}
          className="mt-4 w-32 h-16 text-lg bg-transparent text-black font-bold border-2 border-black rounded-full border-b-4 border-r-4 flex items-center justify-center gap-2 hover:border-b-2 hover:border-r-2"
        >
          <span className='ml-3'>Menu</span>
          <BurgerSvg showMiddleLayer={isMiddleLayerVisible} />
        </button>
      </div>

      {/* Menu Toggle and Modal */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full md:h-[400px] h-[650px] border-b-4 border-r-4 border-l-4 border-black rounded-b-3xl bg-pink-500 z-50 pt-10 text-center">
          <div className="flex justify-between items-center px-10">
            <div className="text-2xl font-bold">
              <Link href="/">
                <img src={logo} alt="Logo" className="h-8 w-full px-5" />
              </Link>
            </div>
            <button
              onClick={handleMenuClick}
              className="mt-4 w-32 h-16 text-lg bg-transparent text-black font-bold border-2 border-black rounded-full border-b-4 border-r-4 flex items-center justify-center gap-2 hover:border-b-2 hover:border-r-2"
            >
              <span className='ml-3'>Menu</span>
              <BurgerSvg showMiddleLayer={isMiddleLayerVisible} />
            </button>
          </div>

          {/* Vertical Menu for Mobile View */}
          <div className="flex flex-col md:ml-14 space-y-8 md:flex-row md:space-x-12 md:space-y-0 text-6xl font-bold pt-12">
            <Link to="/" onClick={handleMenuClick} className="transition-all duration-300 text-black hover:text-red-500">HOME</Link>
            <Link to="/menu" onClick={handleMenuClick} className="transition-all duration-300 text-black hover:text-red-500">MENU</Link>
            <Link to="/categories" onClick={handleMenuClick} className="transition-all duration-300 text-black hover:text-red-500">CATEGORIES</Link>
            <Link to="/contact" onClick={handleMenuClick} className="transition-all duration-300 text-black hover:text-red-500">CONTACT</Link>
          </div>


          {/* Social Media Links */}
          <div className="flex justify-center gap-6 md:gap-12 pt-10">
            <Link to="" className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2">
              <Facebook size={24} />
            </Link>
            <Link to="" className="text-black-500 bg-yellow-500 hover:bg-yellow-600 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2">
              <Twitter size={24} />
            </Link>
            <Link to="" className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2">
              <Instagram size={24} />
            </Link>
            <Link to="" className="text-black-500 bg-yellow-500 hover:bg-yellow-500 border-2 border-black-500 border-b-4 border-r-4 transition-colors p-2 rounded-full shadow-lg transform hover:border-b-2 hover:border-r-2">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}