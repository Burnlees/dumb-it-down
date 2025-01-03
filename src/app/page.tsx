"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { simplifyText } from "~/lib/simplifyText";
import Result from "./_components/result";
import { ProgressBar } from "./_components/progressbar";
import { useToast } from "~/hooks/use-toast";

export default function HomePage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!text) {
        throw new Error("Please enter some text.");
      }
      const simplifiedText = await simplifyText(text);
      setResult(simplifiedText);
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({ title: "Error", description: error.message });
      }
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <ProgressBar />
      </main>
    );
  }

  return (
    <main className="my-auto flex flex-col items-center justify-center gap-12">
      {!result.length ? (
        <div className="mx-4 flex w-full flex-col items-center xl:w-5/6">
          <h1 className="text-xl font-bold">What would you like simplified?</h1>
          <form
            className="flex w-full flex-col items-end gap-4 p-4"
            onSubmit={handleSubmit}
          >
            <Textarea
              className=""
              placeholder="Paste your content here."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button className="w-fit" size={"sm"}>
              Submit
            </Button>
          </form>
        </div>
      ) : (
        <div className="mx-4 xl:w-5/6">
          <Result
            result={result}
            text={text}
            setResult={setResult}
            setText={setText}
          />
        </div>
      )}
    </main>
  );
}
