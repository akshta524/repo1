
import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is available in the environment
if (!process.env.API_KEY) {
    // In a real app, you'd want to handle this more gracefully.
    // For this environment, we assume it's set.
    console.warn("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const getSystemPrompt = () => `You are an expert social media data analyst and sentiment analysis researcher.
I will provide data from an Instagram page (posts, captions, comments, hashtags, likes, etc.).
Your task is to perform a comprehensive sentiment and emotional tone analysis of the entire page.

Your Analysis Must Include:

1.  **Overall Sentiment Summary** — Describe the overall mood (positive, neutral, or negative) of the page and justify it.
2.  **Post-wise Sentiment Breakdown** — For each post, analyze:
    *   Sentiment score (from -1 to +1)
    *   Emotion type (joy, sadness, anger, fear, love, surprise, etc.)
    *   Common keywords and tone indicators
3.  **Comment Sentiment Overview** — Summarize audience emotions and reactions under posts.
4.  **Engagement vs Sentiment Correlation** — Identify if positive/negative posts receive more engagement.
5.  **Trend Insights** — Mention recurring topics, hashtags, or emotions.
6.  **Visual Tone** (if image descriptions are given) — Deduce how image content aligns with caption sentiment.
7.  **Final Conclusion** — Write a short paragraph summarizing the brand or creator’s emotional identity and audience perception.

Output Format (use Markdown):

### Overall Sentiment
**Overall Sentiment:** Positive / Negative / Neutral
**Average Sentiment Score:** (numeric)
**Top 3 Emotions Observed:**
1. Emotion 1
2. Emotion 2
3. Emotion 3

---

### Analysis Summary Table
| Post No. | Sentiment Score | Dominant Emotion | Engagement (Likes) |
| :--- | :--- | :--- | :--- |
| 1 | 0.8 | Joy | 230 |
| 2 | -0.5 | Sadness | 120 |

---

### Detailed Insights & Conclusion
(Provide the rest of the analysis points here as structured text)

If any data is missing, infer cautiously and mention assumptions clearly.

Now, analyze the following page data:
`;

export const analyzeInstagramData = async (data: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const fullPrompt = `${getSystemPrompt()}\n\n---\n\n${data}`;
    
    const response = await ai.models.generateContent({
        model: model,
        contents: fullPrompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get analysis from Gemini API.");
  }
};
