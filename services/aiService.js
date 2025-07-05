import OpenAI from 'openai';

let openai;

function getOpenAIClient() {
  if (!openai) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }
  return openai;
}

async function classifyTicket(title, description) {
  const prompt = `Classify the following support ticket into a category and priority:\n\nTitle: ${title}\nDescription: ${description}\n\nRespond in JSON with keys "category" and "priority". Categories: Billing, Technical Issue, Feedback, General Inquiry. Priority: Low, Medium, High, Urgent.`;

  const client = getOpenAIClient();

  const completion = await client.chat.completions.create({
    //model: 'gpt-4',
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }]
  });

  const text = completion.choices[0].message.content;

  try {
    return JSON.parse(text);
  } catch {
    return { category: 'General Inquiry', priority: 'Medium' };
  }
}

export { classifyTicket };
