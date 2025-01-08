import React from 'react';
import { UserIcon, PhoneIcon, ClockIcon, CashIcon } from '@heroicons/react/outline';
import InfoCard from './InfoCard';
import SecondCard from './SecondCard'; 
import SuccessfulCallsDuration from './SuccessfulCallsDuration'; 

const VoiceAgentData = () => {
  return (
    <div className="p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Voice Agent Data</h2>
        <div className="relative">
          <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-md">
            This Month
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <InfoCard
          icon={UserIcon}
          title="Total Contacts"
          value="500"
          percentage="+8.1%"
        />

        <SecondCard />

        <InfoCard
          icon={ClockIcon}
          title="Remaining Contacts"
          value="200 / 500"
          percentage="+8.1%"
        />

        <InfoCard
          icon={CashIcon}
          title="Total Costs"
          value="$20"
          percentage="+8.1%"
        />
      </div>
      <div className="mt-6">
        <SuccessfulCallsDuration />
      </div>
    </div>
  );
};

export default VoiceAgentData;
