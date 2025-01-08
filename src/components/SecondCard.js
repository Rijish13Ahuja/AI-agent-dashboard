import React from 'react';
import { PhoneIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';

const SecondCard = () => {
  return (
    <div className="p-4 bg-white shadow rounded-md col-span-2 flex items-start justify-between">
      <div className="flex flex-col">
        <div className="p-3 bg-purple-100 rounded-md self-start">
          <PhoneIcon className="w-6 h-6 text-purple-500" />
        </div>
        <p className="text-sm text-gray-500 mt-3">Contacts Called</p>
        <h3 className="text-2xl font-semibold mt-1">300 / 500</h3>
        <div className="flex items-center mt-2">
          <div className="flex items-center justify-center px-2 py-1 bg-green-100 text-green-500 text-xs font-medium rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            +8.1%
          </div>
          <p className="text-xs text-gray-500 ml-2">Since last month</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-1/2">
        <div className="flex items-center p-3 bg-purple-50 rounded-md">
          <div className="p-2 bg-purple-100 rounded-md">
            <CheckCircleIcon className="w-5 h-5 text-purple-500" />
          </div>
          <div className="ml-3">
            <p className="text-xs text-gray-500">Successful Calls</p>
            <h4 className="text-sm font-semibold">200</h4>
          </div>
        </div>
        <div className="flex items-center p-3 bg-purple-50 rounded-md">
          <div className="p-2 bg-purple-100 rounded-md">
            <XCircleIcon className="w-5 h-5 text-purple-500" />
          </div>
          <div className="ml-3">
            <p className="text-xs text-gray-500">Unsuccessful Calls</p>
            <h4 className="text-sm font-semibold">100</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
