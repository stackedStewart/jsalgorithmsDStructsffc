let theNumber = Number(prompt("Pick a number"));

if (!isNaN(theNumber)) {
  const squareRoot = Math.sqrt(theNumber);
  console.log("The square root of " + theNumber + " is " + squareRoot);
} else {
  console.log("Invalid input. Please enter a valid number.");
}