const colorMessage = (color: string) => {
    if (color === "green") {
      console.log("Congrats! you earned 5 points!");
    }
  };
  colorMessage("green");
  colorMessage("red");
  
  const colorMessageWithIfElse = (color: string) => {
    color === "green"
      ? console.log("Congrats! you earned 5 points!")
      : console.log("Congrats! you earned 10 points!");
  };
  colorMessageWithIfElse("green");
  colorMessageWithIfElse("red");