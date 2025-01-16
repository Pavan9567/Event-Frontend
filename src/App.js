import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import EventDashboard from "./components/Eventdashboard";
import CreateEvent from "./components/CreateEvent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </Router>
  );
};

export default App;
