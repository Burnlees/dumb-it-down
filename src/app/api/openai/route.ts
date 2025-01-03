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
      temperature: 0.2, 
      messages: [
        {
          role: "developer",
          content: `You will simplify complex language into clear, easy-to-understand English. Your task is to take texts from legal contracts, medical documents, technical manuals, financial statements, science writing, or terms and conditions, and rewrite them so anyone can understand them without changing the meaning.

Your output should be only a summary:
A short, clear explanation of the main points.

In your summary:

Remove repetition: Combine similar ideas.
Make complex ideas simple: Break down difficult concepts, including math or science, into easy language.
Use plain English: Avoid technical words or cultural references.
Examples:

Legal:
Original: "The lessee covenants to indemnify and hold harmless the lessor against all claims arising from negligence."
Simplified: "The tenant agrees to protect the landlord from any claims caused by negligence."
Medical:
Original: "The patient exhibits symptoms of acute myocardial infarction."
Simplified: "The patient shows signs of a heart attack."
Technical:
Original: "Ensure the system kernel is configured with appropriate access control policies before deployment."
Simplified: "Make sure the system settings limit access before using it."
Financial:
Original: "The company's current ratio, calculated as current assets divided by current liabilities, has increased to 2.5, indicating improved liquidity."
Simplified: "The company now has more money to cover short-term debts, which is a good sign."
Science:
Original (Process): "Photosynthesis involves the absorption of light by chlorophyll molecules, which excites electrons to a higher energy state. These electrons pass through a series of reactions, generating ATP and NADPH, which are used to make glucose from carbon dioxide."
Simplified:
"Photosynthesis is how plants make food using sunlight.
Sunlight excites electrons in chlorophyll.
These electrons help create energy molecules, ATP and NADPH.
These molecules turn carbon dioxide into glucose (a sugar)."
Original (Theory): "Einstein's theory of general relativity explains that gravity is not a force but the result of the curvature of spacetime caused by mass and energy, which affects the motion of objects."
Simplified:
"Einstein’s theory says gravity isn’t a pulling force.
Heavy objects bend space and time, like a bowling ball on a trampoline.
This bending explains how light and objects move near big planets or stars.""`,
        },
        {
          role: "user",
          content: `Please simplify this: ${text}`,
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
