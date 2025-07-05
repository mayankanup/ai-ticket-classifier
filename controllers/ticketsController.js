import { classifyTicket } from '../services/aiService.js';
import { saveTicket } from '../models/ticketModel.js';

async function submitTicket(req, res) {
  try {
    const { title, description } = req.body;
    const classification = await classifyTicket(title, description);
    const saved = saveTicket({ title, description, ...classification });
    res.status(200).json(saved);
  } catch (err) {
    console.error('Error submitting ticket:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export { submitTicket };
