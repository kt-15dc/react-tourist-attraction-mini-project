import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700 text-gray-600 dark:text-gray-400 py-10">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start items-center space-x-2 text-2xl font-extrabold">
            <span className="bg-amber-500 text-white px-2 py-1 rounded-xl">เที่ยว</span>
            <span className="text-gray-800 dark:text-white">ไหนดี</span>
          </div>

          {/* Menu */}
          <ul className="flex justify-center flex-wrap gap-6 text-sm font-medium uppercase tracking-wider">
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors duration-200">Support</a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors duration-200">Discover</a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors duration-200">Terms</a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors duration-200">Partners</a>
            </li>
          </ul>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-gray-400 dark:text-gray-500">
            © 2025 <a href="/" className="hover:text-amber-500 transition-colors duration-200">เที่ยวไหนดี™</a>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
