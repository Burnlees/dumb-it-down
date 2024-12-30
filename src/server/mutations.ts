import { db } from "./db";
import { feedback } from "./db/schema";

export const postFeedback = async (message: string, rating: number) => {
  try {
    await db.insert(feedback).values({
      message,
      rating,
    });
  } catch (error) {
    console.log(error);
  }
};
