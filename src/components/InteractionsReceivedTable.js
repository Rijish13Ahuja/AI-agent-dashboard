import React from "react";

const InteractionsReceivedTable = () => {
  const tableData = [
    { task: "DM Received", number: 500, succeeded: "$316.00", waiting: "$316.00", failed: "$316.00", id: "3941221938" },
    { task: "Like Received", number: 1000, succeeded: "$316.00", waiting: "$316.00", failed: "$316.00", id: "3941221938" },
    { task: "Comment Received", number: 400, succeeded: "$316.00", waiting: "$316.00", failed: "$316.00", id: "3941221938" },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Interactions Received</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Task
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Succeeded
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Waiting
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Failed
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {row.task}
                  <p className="text-xs text-gray-400">ID {row.id}</p>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{row.number}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{row.succeeded}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{row.waiting}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{row.failed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InteractionsReceivedTable;
