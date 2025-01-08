import React from 'react';
import InfoCard from './InfoCard';
import { UserIcon, ChatIcon, CashIcon } from '@heroicons/react/outline';

const ChatbotPerformanceSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <InfoCard
        icon={UserIcon}
        title="Total Clients"
        value="100"
        percentage="+8.1%"
        percentageColor="text-green-500"
        backgroundColor="bg-green-100"
      />

      <InfoCard
        icon={ChatIcon} 
        title="Total Dialogues"
        value="500"
        percentage="-3.2%"
        percentageColor="text-red-500"
        backgroundColor="bg-red-100"
      />

      <InfoCard
        icon={CashIcon}
        title="Total Costs"
        value="$20"
        percentage="-3.2%"
        percentageColor="text-red-500"
        backgroundColor="bg-red-100"
      />
    </div>
  );
};

export default ChatbotPerformanceSection;
