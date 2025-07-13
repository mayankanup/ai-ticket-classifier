import React, { useState } from 'react';
import SubmitTicketForm from './components/SubmitTicketForm';
import TicketList from './components/TicketList';

export default function App() {
  const [view, setView] = useState('submit');

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">AI Ticket Classifier</h1>
      <div className="flex justify-center space-x-4 mb-6">
        <button onClick={() => setView('submit')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit Ticket</button>
        <button onClick={() => setView('view')} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">View Tickets</button>
      </div>
      {view === 'submit' ? <SubmitTicketForm /> : <TicketList />}
    </div>
  );
}
