import { useState } from "react";
import StarSystem from "./starsystem";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { useToast } from "~/hooks/use-toast";

const Feedback = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  const { toast } = useToast();

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, rating }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast({
        title: "Feedback submitted!",
        description: "Thank you for your feedback.",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({ title: "Error", description: error.message });
      } else {
        toast({ title: "Error", description: "An unknown error occurred." });
      }
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild className="px-3">
          <Button variant={"link"}>Provide Feedback</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Feedback</AlertDialogTitle>
            <AlertDialogDescription>
              <StarSystem rating={rating} setRating={setRating} />
              <textarea
                className="mt-4 h-48 w-full p-2"
                placeholder="Provide further context here (optional)."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Feedback;
