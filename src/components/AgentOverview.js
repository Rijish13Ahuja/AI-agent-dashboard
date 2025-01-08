import React from 'react';

const AgentOverview = () => {
  const agents = [
    { id: 1, name: 'Voice Agent One', agentId: '3941221938', status: 'Occupied', meetings: '$874.00', cost: '$316.00' },
    { id: 2, name: 'Voice Agent One', agentId: '3941221938', status: 'Non Occupied', meetings: '$874.00', cost: '$316.00' },
    { id: 3, name: 'Voice Agent One', agentId: '3941221938', status: 'Non Occupied', meetings: '$874.00', cost: '$316.00' },
    { id: 4, name: 'Voice Agent One', agentId: '3941221938', status: 'Non Occupied', meetings: '$874.00', cost: '$316.00' },
    { id: 5, name: 'Voice Agent One', agentId: '3941221938', status: 'Non Occupied', meetings: '$874.00', cost: '$316.00' },
  ];

  return (
    <div className="p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Agent Overview</h2>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium rounded-md bg-purple-100 text-purple-500">
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
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-md shadow-md">
          <thead className="bg-gray-100 text-left text-gray-500">
            <tr>
              <th className="p-4">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="p-4">Name</th>
              <th className="p-4">Status</th>
              <th className="p-4">Meetings Booked</th>
              <th className="p-4">Cost</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => (
              <tr key={agent.id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="p-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="p-4">
                  <p className="font-medium text-gray-800">{agent.name}</p>
                  <p className="text-sm text-gray-500">ID {agent.agentId}</p>
                </td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-sm rounded-full ${
                      agent.status === 'Occupied'
                        ? 'bg-purple-100 text-purple-500'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {agent.status}
                  </span>
                </td>
                <td className="p-4">{agent.meetings}</td>
                <td className="p-4">{agent.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <p>Showing 1 to 5 of 50 results</p>
        <div className="flex items-center space-x-2">
          <button className="px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100">
            Previous
          </button>
          <button className="px-3 py-1 rounded bg-purple-100 text-purple-500">
            1
          </button>
          <button className="px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100">
            2
          </button>
          <button className="px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100">
            3
          </button>
          <button className="px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentOverview;
