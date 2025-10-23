import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }
  const api_key = process.env.GEMINI_API_KEY;
  if (!api_key) {
    return res.status(500).json({ error: "GEMINI_API_KEY not configured" });
  }

  const genAI = new GoogleGenerativeAI(api_key);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const result = await model.generateContent(message);
    const reply = result.response.text();
    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({ error: "Gemini API failed", details: error.message });
  }
}
