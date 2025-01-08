import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaGlobe, FaTh } from "react-icons/fa";
import InteractionsSentTable from "./InteractionsSentTable";
import InteractionsReceivedTable from "./InteractionsReceivedTable";

const OutreachBot = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Outreach Bot</h2>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-purple-100 text-purple-500 rounded-md flex items-center space-x-2 hover:bg-purple-200 hover:text-purple-600 transition">
            <FaTh className="w-5 h-5" />
            <span>All</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md flex items-center space-x-2 hover:bg-purple-200 hover:text-purple-600 transition">
            <FaFacebook className="w-5 h-5" />
            <span>Facebook</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md flex items-center space-x-2 hover:bg-purple-200 hover:text-purple-600 transition">
            <FaInstagram className="w-5 h-5" />
            <span>Instagram</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md flex items-center space-x-2 hover:bg-purple-200 hover:text-purple-600 transition">
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md flex items-center space-x-2 hover:bg-purple-200 hover:text-purple-600 transition">
            <FaGlobe className="w-5 h-5" />
            <span>Website</span>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <select
            id="bot-select"
            className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md hover:bg-purple-200 hover:text-purple-600 transition focus:outline-none"
          >
            <option value="all">All</option>
            <option value="bot1">Bot 1</option>
            <option value="bot2">Bot 2</option>
          </select>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition">
            Show Results
          </button>
        </div>
      </div>
      <InteractionsSentTable />
      <InteractionsReceivedTable />
    </div>
  );
};

export default OutreachBot;
