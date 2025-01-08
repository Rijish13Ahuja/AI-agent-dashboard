import React from 'react';
import { ClockIcon } from '@heroicons/react/outline';

const SuccessfulCallsDuration = () => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <div className="flex items-center">
        <div className="p-3 bg-purple-100 rounded-md">
          <ClockIcon className="w-6 h-6 text-purple-500" />
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-500">Successful Calls Duration</p>
          <h3 className="text-2xl font-semibold">200</h3>
        </div>
      </div>
      <div className="mt-6 relative">
        <div className="w-full bg-gray-200 h-2 rounded-full relative">
          <div className="absolute left-0 bg-purple-500 h-2 w-2/5 rounded-l-full"></div>
          <div className="absolute left-2/5 bg-purple-400 h-2 w-1/3"></div>
          <div className="absolute left-2/3 bg-purple-300 h-2 w-1/5 rounded-r-full"></div>
        </div>
        <div className="absolute top-4 left-[55%] p-2 bg-white shadow rounded-md text-xs text-gray-500">
          30–60s: 30%
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <p className="text-xs text-gray-500">Within 30s</p>
          <p className="text-xs text-gray-700 font-semibold">40 – 40%</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
          <p className="text-xs text-gray-500">30–60s</p>
          <p className="text-xs text-gray-700 font-semibold">30 – 30%</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
          <p className="text-xs text-gray-500">Over 1 min</p>
          <p className="text-xs text-gray-700 font-semibold">10 – 10%</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulCallsDuration;
