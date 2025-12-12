import React from "react";
import Navbar from "./component/Navbar.jsx";
import MainContent from "./component/MainContent.jsx";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
