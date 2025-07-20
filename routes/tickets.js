import express from 'express';
import { submitTicket } from '../controllers/ticketsController.js';
import { getAllTickets, deleteTicket } from '../models/ticketModel.js';
const router = express.Router();

router.post('/', submitTicket);

router.get('/', (req, res) => {
  try {
    const tickets = getAllTickets();
    res.json(tickets);
  } catch (err) {
    console.error('Error fetching tickets:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = deleteTicket(id);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.json({ message: 'Ticket deleted successfully' });
  } catch (err) {
    console.error('Error deleting ticket:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;
