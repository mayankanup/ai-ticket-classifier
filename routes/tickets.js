import express from 'express';
import { submitTicket } from '../controllers/ticketsController.js';

const router = express.Router();

router.post('/', submitTicket);

export default router;
