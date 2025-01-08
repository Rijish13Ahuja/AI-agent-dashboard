import React from 'react';
import { BellIcon, SunIcon, SearchIcon } from '@heroicons/react/outline';

const NavigationBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      <div>
        <h1 className="text-lg font-semibold">Overview</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <SunIcon className="w-6 h-6 text-purple-500 cursor-pointer" />
        <BellIcon className="w-6 h-6 text-purple-500 cursor-pointer" />

        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center cursor-pointer">
          <img
            src="https://via.placeholder.com/150" 
            alt="User"
            className="rounded-full"
          />
        </div>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
