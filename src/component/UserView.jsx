import React from "react";

const UserView = ({ setView }) => {
  return (
    <div className="flex flex-col items-center pt-24">
      <div className="text-5xl font-bold text-center leading-tight mb-12">
        Generation Thailand
        <br />
        React - Assessment
      </div>
      <div className="flex space-x-30">
        <button
          className="px-8 py-3 text-base border border-gray-300 rounded-md bg-white shadow-md cursor-pointer font-bold transition duration-150 hover:bg-gray-100"
          onClick={() => setView("")}
        >
          User Home View
        </button>
        <button
          className="px-8 py-3 text-base border border-gray-300 rounded-md bg-white shadow-md cursor-pointer font-bold transition duration-150 hover:bg-gray-100 "
          onClick={() => setView("admin")}
        >
          Admin Home View
        </button>
      </div>
      <div className="w-4/5 max-w-2xl mt-4">
        <p className="text-xs mb-1 text-gray-600">Table 1</p>
        <table className="min-w-full border-collapse border border-gray-300 shadow-lg bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300 bg-gray-100 font-semibold text-sm w-1/3">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 bg-gray-100 font-semibold text-sm w-1/3">
                Last Name
              </th>
              <th className="px-4 py-2 border border-gray-300 bg-gray-100 font-semibold text-sm w-1/3">
                Position
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300 h-10"></td>
              <td className="px-4 py-2 border border-gray-300 h-10"></td>
              <td className="px-4 py-2 border border-gray-300 h-10"></td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 h-10"></td>
              <td className="px-4 py-2 border border-gray-300 h-10"></td>
              <td className="px-4 py-2 border border-gray-300 h-10"></td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 h-10"></td>
              <td className="px-4 py-2 border border-gray-300 h-10"></td>
              <td className="px-4 py-2 border border-gray-300 h-10"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserView;
