import { useEffect } from "react";
import axios from "axios";
import PhuketImage from '../assets/Phuket.png';
import { NavBar } from "./NavBar";

export const HomeHeader = ({ setPlaceArray, textChange, setTextChange }) => {
  const handleChange = (e) => {
    setTextChange(e.target.value);
  };

  const fetchData = async (text) => {
    const response = await axios.get(`http://localhost:4001/trips?keywords=${text}`);
    const placeArray = response.data.data;
    setPlaceArray(placeArray);
  };

  useEffect(() => {
    fetchData(textChange);
  }, [textChange]);

  return (
    <div className="relative">
      {/* Nav - now fully outside the header */}
      <NavBar />
      <header className="relative h-96 bg-cover bg-center text-white" style={{ backgroundImage: `url(${PhuketImage})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 z-0 pointer-events-none"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-green-300 uppercase tracking-wider text-sm md:text-base mb-2">
            Be the part of this wonderful journey
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
            Incredible Thailand!
          </h1>
          <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-3 rounded-full text-sm shadow-lg transition">
            สำรวจตอนนี้
          </button>

          {/* Search Box */}
          <div className="bg-white mt-10 rounded-full px-6 py-3 shadow-xl flex items-center gap-3 w-full max-w-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={textChange}
              onChange={handleChange}
              placeholder="ค้นหาสถานที่ เช่น เชียงใหม่, พัทยา..."
              className="flex-1 outline-none text-black text-sm placeholder-gray-500 bg-transparent"
            />
          </div>
        </div>
      </header>
    </div>
  );
};
