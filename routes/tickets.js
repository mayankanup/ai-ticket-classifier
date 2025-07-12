import express from 'express';
import { submitTicket } from '../controllers/ticketsController.js';
import { getAllTickets } from '../models/ticketModel.js';
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


export default router;
