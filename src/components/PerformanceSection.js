import React from 'react';
import { CalendarIcon, ThumbUpIcon } from '@heroicons/react/outline';

const PerformanceSection = () => {
  return (
    <div className="p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Total Performance</h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-sm font-medium rounded-md bg-purple-100 text-purple-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            All
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-purple-500">
            Voice Agents
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-purple-500">
            Chat Bots
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-purple-500">
            Outreach Bots
          </button>
        </div>
        <div className="relative">
          <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-md">
            This Month
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded-md flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-purple-100 rounded-md">
              <CalendarIcon className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Meetings Booked</p>
              <h3 className="text-xl font-semibold">10</h3>
            </div>
          </div>
          <div className="text-green-500 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
            +8.1%
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-md flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-purple-100 rounded-md">
              <ThumbUpIcon className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Interested in Booking</p>
              <h3 className="text-xl font-semibold">15</h3>
            </div>
          </div>
          <div className="text-red-500 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            -3.2%
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
