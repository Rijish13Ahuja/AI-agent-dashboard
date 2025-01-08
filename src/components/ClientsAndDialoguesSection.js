import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ClientsAndDialoguesSection = () => {
  const clientsData = {
    labels: ["Inquiries - Clients", "Problem Reports - Clients"],
    datasets: [
      {
        labels: ["Inquiries - Clients", "Problem Reports - Clients"],
        data: [80, 20],
        backgroundColor: ["#7C3AED", "#E9D5FF"],
        hoverBackgroundColor: ["#7C3AED", "#E9D5FF"],
      },
    ],
  };

  const dialoguesData = {
    labels: ["Inquiries - Dialogues", "Problem Reports - Dialogues"],
    datasets: [
      {
        labels: ["Inquiries - Dialogues", "Problem Reports - Dialogues"],
        data: [200, 300],
        backgroundColor: ["#7C3AED", "#E9D5FF"],
        hoverBackgroundColor: ["#7C3AED", "#E9D5FF"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const index = tooltipItem.dataIndex;
            const label = dataset.labels[index];
            const value = dataset.data[index];
            const total = dataset.data.reduce((acc, curr) => acc + curr, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Clients and Dialogues</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex items-start">
          <div className="space-y-2 mr-4">
            <p className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              <span className="text-sm text-gray-600">Inquiries - Clients</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-purple-200 rounded-full"></span>
              <span className="text-sm text-gray-600">
                Problem Reports - Clients
              </span>
            </p>
          </div>
          <div className="relative" style={{ width: "200px", height: "200px" }}>
            <Doughnut data={clientsData} options={options} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold">100</p>
              <p className="text-gray-500 text-sm">Clients</p>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <div className="space-y-2 mr-4">
            <p className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              <span className="text-sm text-gray-600">Inquiries - Dialogues</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-purple-200 rounded-full"></span>
              <span className="text-sm text-gray-600">
                Problem Reports - Dialogues
              </span>
            </p>
          </div>
          <div className="relative" style={{ width: "200px", height: "200px" }}>
            <Doughnut data={dialoguesData} options={options} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold">500</p>
              <p className="text-gray-500 text-sm">Dialogues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsAndDialoguesSection;
