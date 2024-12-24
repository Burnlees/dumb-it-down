import { NextResponse } from "next/server";
import OpenAI from "openai";
import { env } from "~/env";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export const POST = async (req: Request) => {
  try {
    console.log("Received request");

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
            "You are a helpful assistant, that's primary goal is to rephrase complex language in a way that is understandable to the average person. Please reply with a simplified version of the following text, in a concise paragraph, while keeping the meaning intact.",
        },
        {
          role: "user",
          content: `${text}`,
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
