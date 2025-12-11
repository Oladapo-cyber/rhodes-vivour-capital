import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateMarketThesis = async (sector: string): Promise<string> => {
  if (!apiKey) {
    return "API Key not configured. Unable to generate real-time insights.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a sophisticated, visionary investment thesis for the "${sector}" sector. 
      The tone should be professional, authoritative, and suitable for a high-end venture capital firm's website.
      Focus on future growth potential, technological disruption, and long-term value creation.
      Keep it concise (max 3 sentences). Do not use markdown formatting.`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Insight generation unavailable at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our analysts are currently busy. Please try again later.";
  }
};