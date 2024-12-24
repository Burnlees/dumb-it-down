export const simplifyText = async (userInput: string) => {
  try {
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: userInput }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data.simplifiedText;
  } catch (error) {
    console.error("There was an error!", error);
  }
};
