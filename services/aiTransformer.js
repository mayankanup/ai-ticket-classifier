import { pipeline } from '@xenova/transformers';
import { categoryLabels, priorityLabels } from './aiConstants.js';

async function classifyTicketUsingLocalModel(title, description) {
    //return { category: 'General Inquiry', priority: 'Medium' };
    const classifier = await pipeline('zero-shot-classification', 'Xenova/mobilebert-uncased-mnli');//'Xenova/distilbert-base-uncased');
    const input = `${title}. ${description}`;

    const categoryResult = await classifier(input, categoryLabels);
    const priorityResult = await classifier(input, priorityLabels);

    const output = {
      category: categoryResult.labels[0],
      priority: priorityResult.labels[0]
    };

    return output;
}

export { classifyTicketUsingLocalModel };