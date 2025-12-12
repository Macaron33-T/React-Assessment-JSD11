import React, { useState } from "react";
import Navbar from "./component/Navbar.jsx";
import MainContent from "./component/MainContent.jsx";
import UserView from "./component/UserView.jsx";
import AdminView from "./component/AdminView.jsx";
import "./index.css";

const App = () => {
  const [view, setView] = useState("initial");

  const renderView = () => {
    switch (view) {
      case "user":
        return <UserView setView={setView} />;

      case "Admin":
        return <MainContent setView={setView} />;

      case "initial":
      default:
        return <MainContent setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      {renderView()}
    </div>
  );
};

export default App;
