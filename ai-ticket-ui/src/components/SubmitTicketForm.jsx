import React, { useState } from 'react';
import axios from 'axios';

export default function SubmitTicketForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('/api/tickets', { title, description });
      setResult(res.data);
      setTitle('');
      setDescription('');
    } catch (err) {
      setError('Failed to submit ticket');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Title" className="w-full border px-3 py-2 rounded" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Description" className="w-full border px-3 py-2 rounded" value={description} onChange={e => setDescription(e.target.value)} required></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
      </form>

      {result && (
        <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded">
          <h2 className="font-semibold">Classified As:</h2>
          <p><strong>Category:</strong> {result.category}</p>
          <p><strong>Priority:</strong> {result.priority}</p>
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
