import Sidebar from './components/Sidebar';
import NavigationBar from './components/NavigationBar';
import PerformanceSection from './components/PerformanceSection';
import AgentOverview from './components/AgentOverview';
import VoiceAgentData from './components/VoiceAgentData';
import ChatbotData from './components/ChatbotData';
import OutreachBot from './components/OutreachBot'; 

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <NavigationBar />
        <div className="p-4">
          <PerformanceSection />
          <AgentOverview />
          <VoiceAgentData />
          <ChatbotData /> 
          <OutreachBot />
        </div>
      </div>
    </div>
  );
}

export default App;
