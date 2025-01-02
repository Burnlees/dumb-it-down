import { NextResponse } from "next/server";
import OpenAI from "openai";
import { env } from "~/env";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export const POST = async (req: Request) => {
  try {

    const body = await req.json();

    const { text } = body;

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "developer",
          content:
            "You are a skilled language assistant whose main task is to rephrase complex or technical content into clear, concise, and simple language that an average person can easily understand. Your responses should preserve the original meaning and be formatted as a single, straightforward paragraph without unnecessary details.",
        },
        {
          role: "user",
          content: `Please rephrase this: ${text}`,
        },
      ],
    });

    return NextResponse.json(
      { simplifiedText: completion.choices[0]?.message.content },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error: "There was an error" }, { status: 500 });
  }
};
