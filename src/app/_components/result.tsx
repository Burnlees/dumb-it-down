import { Dispatch, SetStateAction } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type ResultProps = {
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
  setText: Dispatch<SetStateAction<string>>;
};

const Result = ({ result, setResult, setText }: ResultProps) => {
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Result;
