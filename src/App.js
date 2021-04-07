import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Body from "./components/Body";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App_body">
        <Router>
          <Sidebar />
          <Body />
        </Router>
      </div>
    </div>
  );
}

export default App;
