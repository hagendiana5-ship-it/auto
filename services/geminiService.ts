import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Language } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

/**
 * Generates marketing copy or technical advice based on a prompt.
 * Accepts an optional base64 image for analysis.
 */
export const generateTextContent = async (prompt: string, lang: Language, imageBase64?: string): Promise<string> => {
  try {
    const languageName = lang === 'es' ? 'Spanish' : lang === 'de' ? 'German' : 'English';
    
    let parts: any[] = [{ text: prompt }];

    // If an image is provided, add it to the request parts
    if (imageBase64) {
      // Strip prefix if present (data:image/jpeg;base64,...)
      const base64Data = imageBase64.split(',')[1] || imageBase64;
      parts.push({
        inlineData: {
          mimeType: 'image/jpeg', 
          data: base64Data
        }
      });
    }

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', // Multimodal model capable of vision and text
      contents: {
        parts: parts
      },
      config: {
        systemInstruction: `You are an expert automotive mechanic and visualization specialist for 'Apex AutoWorks'. 
        If an image is provided, analyze the vehicle's condition, damage, or style.
        If no image is provided, focus on the user's text description.
        Keep responses concise, professional, and technically accurate. 
        ALWAYS respond in ${languageName}.`,
      }
    });
    return response.text || "Service unavailable.";
  } catch (error) {
    console.error("Text generation error:", error);
    return "Service temporarily unavailable.";
  }
};

/**
 * Generates an image of a car or repair scenario.
 */
export const generateCarImage = async (prompt: string): Promise<string | null> => {
  try {
    // Using gemini-2.5-flash-image for general image generation tasks as per guidelines
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `High quality, photorealistic, cinematic lighting, 4k. ${prompt}`,
          },
        ],
      },
      config: {
        // Nano banana models don't support responseMimeType or responseSchema
      },
    });

    // Extract image from response parts
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation error:", error);
    return null;
  }
};