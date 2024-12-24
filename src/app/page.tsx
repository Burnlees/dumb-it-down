"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { simplifyText } from "~/lib/simplifyText";
import Result from "./_components/result";
import { ProgressBar } from "./_components/progressbar";
export default function HomePage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    const simplifiedText = await simplifyText(text);
    setResult(simplifiedText);
    setLoading(false);
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <ProgressBar />
      </main>
    );
  }

  return (
    <main className="flex my-auto flex-col items-center justify-center gap-12">
      {!result.length ? (
        <div className="flex w-5/6 flex-col items-center">
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
        <div className="w-3/4">
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
