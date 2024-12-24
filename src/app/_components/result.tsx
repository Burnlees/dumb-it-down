import React from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type ResultProps = {
  result: string;
};

const Result = ({ result }: ResultProps) => {
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Simplified</CardTitle>
          <Button className="w-fit" size={"sm"}>
            Go Back
          </Button>
        </CardHeader>
        <CardContent>
          <p>{result}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Result;
