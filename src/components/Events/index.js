import React, { useState, useEffect } from 'react';

function EventList({ events }) {
  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <h3>{event.local_date} - {event.name}</h3>
          <a href={event.link}>{event.link}</a>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch('https://api.meetup.com/serverless-barcelona/events?&sign=true&photo-host=public&status=upcoming,past&desc=true');
      const data = await response.json();
      setEvents(data);
    }
    fetchEvents();
  }, []);

  return <EventList events={events} />;
}
