import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const retrieveText = async (prompt: string) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4o",
    });

    return completion?.choices[0]?.message?.content;
  } catch (error) {
    console.error("[GPT4o_ERROR]", error);
    throw error;
  }
};