import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {
    const { messages, system } = req.body;

    const lastMessage =
      messages?.[messages.length - 1]?.content || '';

    if (!lastMessage) {
      return res.status(400).json({
        error: 'Message required',
      });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: system || '',
    });

    const result = await model.generateContent(lastMessage);

    const reply = result.response.text();

    return res.status(200).json({
      content: [
        {
          text: reply,
        },
      ],
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: 'Internal server error: ' + err.message,
    });
  }
}
