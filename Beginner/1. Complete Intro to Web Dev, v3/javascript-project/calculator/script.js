let buffer = "0";

// runningTotal = For example, if we perform 5 + 5 + 10, we need a variable
// to store the intermediate result of these calculations in the background.
let runningTotal = 0;

// previousOperator = This keeps track of the last operator we used.
// For example, after performing 5 + 5, it stores the + operator.
let previousOperator;
const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number;
    // buffer = buffer + number
  }
}

function handleMath(value) {
  if (buffer === "0") {
    // Do nothing if there's no number to operate on
    return;
  }

  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = value; // Stores the operator (+, -, ×, ÷)

  // When we select an operator after entering a number (e.g., 56),
  // the display resets to 0, preparing for the next input.
  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "x") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= intBuffer;
  }
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      break;
    case "=":
      // If we hit "=", but haven't used any operator yet, do nothing.
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));

      // After calculating, reset the previous operator to null,
      // so it doesn't interfere with the next calculation.
      previousOperator = null;

      // The result (runningTotal) is stored in the buffer for display.
      // Converting runningTotal to a string by concatenating it with "".
      buffer = "" + runningTotal;

      // Reset runningTotal to 0 after the calculation is complete.
      runningTotal = 0;
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(value);
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        // If the display is 954, this will remove the last digit (4).
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
  }
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText); // Calls the 'buttonClick' function
    });
}

function rerender() {
  screen.innerText = buffer;
}

init();
