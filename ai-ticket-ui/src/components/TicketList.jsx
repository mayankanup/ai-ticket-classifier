import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('/api/tickets')
      .then(res => setTickets(res.data))
      .catch(err => console.error('Error fetching tickets', err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/tickets/${id}`);
      setTickets((prev) => prev.filter((ticket) => ticket.id !== id));
      toast.success('Ticket deleted successfully');
    } catch (err) {
      console.error('Error deleting ticket', err);
      toast.error('Failed to delete ticket');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Submitted Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Priority</th>
              <th className="p-2 border">Created At</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket.id} className="border-t">
                <td className="p-2 border">{ticket.title}</td>
                <td className="p-2 border">{ticket.description}</td>
                <td className="p-2 border">{ticket.category}</td>
                <td className="p-2 border">{ticket.priority}</td>
                <td className="p-2 border">{new Date(ticket.createdAt).toLocaleString()}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(ticket.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
