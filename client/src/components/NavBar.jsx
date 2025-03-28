import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10  bg-opacity-60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 bg-transparent text-white">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2 z-30">
          <span className="bg-white text-amber-600 px-2 py-1 rounded">เที่ยว</span>
          <span className="text-white">ไหนดี</span>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden z-30 inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded cursor-pointer hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-semibold text-sm uppercase tracking-wide cursor-pointer z-30">
          <a href="#" className="hover:text-amber-400">หน้าหลัก</a>
          <a href="#" className="hover:text-amber-400">ที่เที่ยว</a>
          <a href="#" className="hover:text-amber-400">บริการ</a>
          <a href="#" className="hover:text-amber-400">แพ็กเกจ</a>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`fixed top-20 left-0 right-0 z-30 transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="bg-white text-black rounded-lg mx-6 shadow-lg py-4 flex flex-col gap-2 font-semibold text-center uppercase tracking-wide">
            <a href="#" className="py-2 px-4 hover:bg-amber-100">หน้าหลัก</a>
            <a href="#" className="py-2 px-4 hover:bg-amber-100">ที่เที่ยว</a>
            <a href="#" className="py-2 px-4 hover:bg-amber-100">บริการ</a>
            <a href="#" className="py-2 px-4 hover:bg-amber-100">แพ็กเกจ</a>
          </div>
        </div>
      </nav>
    </>
  );
};
