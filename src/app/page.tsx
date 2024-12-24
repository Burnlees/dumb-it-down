"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { simplifyText } from "~/lib/simplifyText";

export default function HomePage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const simplifiedText = await simplifyText(text);
    setResult(simplifiedText);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">Dumb It Down</h1>
      <form className="flex w-3/4 flex-col gap-4" onSubmit={handleSubmit}>
        <Textarea
          className=""
          placeholder="Paste your content here."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="w-fit">Submit</Button>
      </form>
      <div className="w-3/4">
        <h2 className="text-2xl font-bold">Simplified Text</h2>
        <p>{result}</p>
      </div>
    </main>
  );
}
