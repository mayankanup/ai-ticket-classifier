import { classifyTicket } from '../services/aiService.js';
import { classifyTicketUsingLocalModel} from '../services/aiTransformer.js';
import { saveTicket } from '../models/ticketModel.js';

async function submitTicket(req, res) {
  try {
    const { title, description } = req.body;
    const classification = await getTicketClassification(title, description);
    const saved = saveTicket({ title, description, ...classification });
    res.status(200).json(saved);
  } catch (err) {
    console.error('Error submitting ticket:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getTicketClassification(title, description){
  if(process.env.CLASSIFIER=== 'LOCAL'){
    const localClassification = await classifyTicketUsingLocalModel(title, description);
    return localClassification;
  }else{
    const classification = await classifyTicket(title, description);
    return classification;
  }
}

export { submitTicket };
