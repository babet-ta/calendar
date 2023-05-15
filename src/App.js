import './App.css';
import { Calendar } from './Calendar';
import { MOCKEVENTS } from './Calendar/const';
import { useState } from "react";

function App() {
  const [events, setEvents] = useState(MOCKEVENTS)
  const addEvent = (date, color) => {
    const text = window.prompt('text');
    setEvents(prev => [...prev, { date, title: text, color }]);
  };
  return (
    <div className="App">
      <Calendar
        startingDate={new Date()}
        eventsArr={events}
        addEvent={addEvent}
      />
    </div>
  );
}

export default App;
