import {db} from '../db/database.js';

function saveTicket({ title, description, category, priority }) {
  const stmt = db.prepare(`
    INSERT INTO tickets (title, description, category, priority)
    VALUES (?, ?, ?, ?)
  `);
  const info = stmt.run(title, description, category, priority);

  return {
    id: info.lastInsertRowid,
    title,
    description,
    category,
    priority,
    createdAt: new Date().toISOString()
  };
}

function getAllTickets() {
  const stmt = db.prepare('SELECT * FROM tickets ORDER BY createdAt DESC');
  return stmt.all();
}

let tickets = [];
let nextId = 1;

function saveTicketInMemory({ title, description, category, priority }) {
  const ticket = {
    id: nextId++,
    title,
    description,
    category,
    priority,
    createdAt: new Date(),
  };
  tickets.push(ticket);
  return ticket;
}

function deleteTicket(id) {
  const stmt = db.prepare('DELETE FROM tickets WHERE id = ?');
  return stmt.run(id); // returns { changes: 1 } if deleted
}

export { saveTicket, getAllTickets, deleteTicket };
