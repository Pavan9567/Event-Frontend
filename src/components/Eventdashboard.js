import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EventDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://event-backend-moqr.onrender.com/api/events", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEvents(res.data);
      } catch (err) {
        alert("Failed to load events!");
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Event Dashboard</h2>
      <Link to="/create-event">Create Event</Link><br/>
      <Link to="/login">Login</Link><br/>
      <Link to="/register">Register</Link><br/>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventDashboard;
