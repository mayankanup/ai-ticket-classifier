let tickets = [];
let nextId = 1;

function saveTicket({ title, description, category, priority }) {
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

export { saveTicket };
