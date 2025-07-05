import dotenv from 'dotenv';
dotenv.config();
console.log("OPENAI_API_KEY is", process.env.OPENAI_API_KEY ? "set ✅" : "missing ❌");

import express from 'express';
import ticketRoutes from './routes/tickets.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/tickets', ticketRoutes);

app.get('/', (req, res) => {
  res.send('AI Ticket Classifier API is running');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
