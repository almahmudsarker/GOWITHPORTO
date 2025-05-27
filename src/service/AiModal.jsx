import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are a helpful and intelligent travel planning assistant.",
});

export const generateAIContent = async (prompt) => {
  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 4096,
        topP: 0.95,
        topK: 40,
      },
    });

    const response = await result.response;
    const text = response.text();

    console.log("✅ AI Output:", text);
    return text;
  } catch (error) {
    console.error("❌ Error generating AI content:", error);
    return "Error generating travel plan.";
  }
};
