import { Dispatch, SetStateAction } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

type ResultProps = {
  result: string;
  text: string;
  setResult: Dispatch<SetStateAction<string>>;
  setText: Dispatch<SetStateAction<string>>;
};

const Result = ({ result, text, setResult, setText }: ResultProps) => {
  const handleClick = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="flex flex-col items-end">
      <Button onClick={handleClick} variant={"link"} size={"sm"}>
        Go Back
      </Button>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Simplified</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{result}</p>
          <Separator className="my-4" />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Original</AccordionTrigger>
              <AccordionContent>{text}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default Result;
