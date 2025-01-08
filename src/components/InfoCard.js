// src/components/InfoCard.js
import React from 'react';

const InfoCard = ({ icon: Icon, title, value, percentage }) => {
  return (
    <div className="p-4 bg-white shadow rounded-md flex flex-col justify-between">
      <div className="p-3 bg-purple-100 rounded-md self-start">
        <Icon className="w-6 h-6 text-purple-500" />
      </div>

      <p className="text-sm text-gray-500 mt-3">{title}</p>

      <h3 className="text-2xl font-semibold mt-1">{value}</h3>

      <div className="flex items-center mt-3">
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
          {percentage}
        </div>
        <p className="text-xs text-gray-500 ml-2">Since last month</p>
      </div>
    </div>
  );
};

export default InfoCard;
