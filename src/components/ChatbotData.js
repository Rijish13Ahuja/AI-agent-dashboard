import React from 'react';
import { ViewGridIcon, GlobeAltIcon } from '@heroicons/react/outline';
import ChatbotPerformanceSection from './ChatBotPerformanceSection';
import ClientsAndDialoguesSection from './ClientsAndDialoguesSection';

const ChatbotData = () => {
  return (
    <div className="p-4 bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Chatbot Data</h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-purple-100 text-purple-500 rounded-md flex items-center space-x-2 hover:bg-purple-200 hover:text-purple-600 transition">
            <ViewGridIcon className="w-5 h-5" />
            <span>All</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md flex items-center space-x-2 hover:bg-purple-200 hover:text-purple-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.197 21v-7.611H6.734V9.588h2.463V7.527c0-2.43 1.482-3.768 3.647-3.768 1.055 0 1.962.078 2.225.112v2.576h-1.528c-1.2 0-1.433.571-1.433 1.408v1.733h2.856l-.373 3.801h-2.483V21"></path>
            </svg>
            <span>Facebook</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md flex items-center space-x-2 hover:bg-purple-200 hover:text-purple-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.794 2 3 3.794 3 6v12c0 2.206 1.794 4 4 4h10c2.206 0 4-1.794 4-4V6c0-2.206-1.794-4-4-4H7zm10 2a1.001 1.001 0 0 1 1 1 1.001 1.001 0 0 1-1 1c-.55 0-1-.448-1-1s.45-1 1-1zm-5 3a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"></path>
            </svg>
            <span>Instagram</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md flex items-center space-x-2 hover:bg-purple-200 hover:text-purple-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.523 0 10 4.477 10 10 0 1.824-.491 3.531-1.366 5.01l.918 3.672-3.693-.905A9.962 9.962 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 2C7.589 4 4 7.589 4 12c0 4.411 3.589 8 8 8a7.96 7.96 0 0 0 4.934-1.682l.398-.295 2.058.504-.513-2.07.295-.398A7.96 7.96 0 0 0 20 12c0-4.411-3.589-8-8-8zm-2.185 3.506.88.112c.158.021.3.106.384.234l.953 1.43a.465.465 0 0 1 .059.46l-.467.994a.442.442 0 0 0 .037.427c.145.204.377.463.704.778.667.636 1.141.867 1.507 1.013.167.07.35.024.477-.116l.776-.83a.44.44 0 0 1 .412-.121l1.577.385a.446.446 0 0 1 .297.619l-.637 1.383a.906.906 0 0 1-.954.493c-.708-.083-1.515-.398-2.415-.923-.897-.521-1.66-1.179-2.313-1.87-.587-.634-1.044-1.305-1.365-1.94-.35-.686-.564-1.348-.648-1.952-.094-.649.262-1.124.834-1.21z"></path>
            </svg>
            <span>Whatsapp</span>
          </button>
          {/* Website */}
          <button className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md flex items-center space-x-2 hover:bg-purple-200 hover:text-purple-600 transition">
            <GlobeAltIcon className="w-5 h-5" />
            <span>Website</span>
          </button>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-md flex items-center space-x-2 hover:bg-purple-200 hover:text-purple-600 transition">
          <span>This Month</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <ChatbotPerformanceSection />
      <ClientsAndDialoguesSection />
    </div>
  );
};

export default ChatbotData;
