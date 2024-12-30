import { Copy } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { useToast } from "~/hooks/use-toast";
import Feedback from "./feedback";

type ResultProps = {
  result: string;
  text: string;
  setResult: Dispatch<SetStateAction<string>>;
  setText: Dispatch<SetStateAction<string>>;
};

const Result = ({ result, text, setResult, setText }: ResultProps) => {
  const { toast } = useToast();

  const handleGoBack = () => {
    setText("");
    setResult("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    toast({
      description: "Copied to clipboard.",
    });
  };

  return (
    <div className="flex flex-col items-end">
      <Button onClick={handleGoBack} variant={"link"} size={"sm"}>
        Go Back
      </Button>
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Simplified</CardTitle>
          <Button onClick={handleCopy} size={"sm"} variant={"ghost"}>
            <Copy size={16} />
          </Button>
        </CardHeader>
        <CardContent>
          <p>{result}</p>
          <div className="">
          </div>
          <Separator className="my-4" />
          <Accordion type="single" collapsible className="w-full bg-muted px-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Original</AccordionTrigger>
              <AccordionContent>{text}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
            <Feedback />
    </div>
  );
};

export default Result;