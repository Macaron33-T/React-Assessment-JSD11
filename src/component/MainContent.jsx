const MainContent = () => {
  return (
    <div className="flex flex-col items-center pt-24">
      <div className="text-5xl font-bold text-center leading-tight mb-12">
        Generation Thailand
        <br />
        React - Assessment
      </div>
      <div className="flex space-x-10">
        <button className="px-8 py-3 text-base border border-gray-300 rounded-md bg-white shadow-md cursor-pointer font-medium transition duration-150 hover:bg-gray-100">
          User Home View
        </button>
        <button className="px-8 py-3 text-base border border-gray-300 rounded-md bg-white shadow-md cursor-pointer font-medium transition duration-150 hover:bg-gray-100">
          Admin Home View
        </button>
      </div>
    </div>
  );
};

export default MainContent;
