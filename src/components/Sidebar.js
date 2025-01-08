import React from 'react';
import {
  ClockIcon,
  UserIcon,
  CreditCardIcon,
  LogoutIcon,
  ChatIcon,
  MicrophoneIcon,
  CubeIcon,
} from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col p-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold">Logo</h1>
        <div className="p-2 rounded-md bg-purple-100 text-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 p-2 rounded-md bg-purple-100 text-purple-500">
          <ClockIcon className="w-6 h-6" />
          <span>Overview</span>
        </div>

        <div className="mt-4">
          <p className="text-gray-500 text-sm font-medium mb-2">Agents</p>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <MicrophoneIcon className="w-6 h-6 text-purple-500" />
            <span>Voice Agents</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <ChatIcon className="w-6 h-6 text-purple-500" />
            <span>Chat Bots</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <CubeIcon className="w-6 h-6 text-purple-500" />
            <span>Outreach Bots</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-500 text-sm font-medium mb-2">User Settings</p>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <UserIcon className="w-6 h-6 text-purple-500" />
            <span>Profile</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <CreditCardIcon className="w-6 h-6 text-purple-500" />
            <span>Payment</span>
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <LogoutIcon className="w-6 h-6 text-purple-500" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
