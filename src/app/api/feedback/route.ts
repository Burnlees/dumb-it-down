import { NextResponse } from "next/server";
import { postFeedback } from "~/server/mutations";

export const POST = async (req: Request) => {
  try {
    console.log("Received request");

    const body = await req.json();

    const {message, rating } = body;

    if (!rating) {
      return NextResponse.json(
        { error: "Rating is required" },
        { status: 400 },
      );
    }

    await postFeedback(message, rating);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "There was an error" }, { status: 500 });
  }
};
