# JavaScript Exercise

## Solution

- The Solution Calculator by Brian Holt can be seen here [Click Me!](https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/calculator.html)
- The solution for the HTML, CSS, and JavaScript are as follows:
  - [HTML](https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/calculator.html)
  - [CSS](https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/calculator.css)
  - [JavaScript](https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/calculator.js)

## Logic Flowchart

```mermaid
flowchart TD
    Start --> PressNumber["Press Number (e.g., '5')"]
    PressNumber --> buttonClick1["buttonClick() -> calls handleNumber(5)"]
    buttonClick1 --> bufferUpdate1["buffer is updated to '5'"]
    bufferUpdate1 --> PressOperator["Press Operator (e.g., '+')"]
    PressOperator --> buttonClick2["buttonClick() -> calls handleSymbol('+')"]
    buttonClick2 --> handleMath["Call handleMath('+')"]
    handleMath --> runningTotalCheck{"Is runningTotal == 0?"}
    runningTotalCheck -->|Yes| storeBuffer["Store buffer (converted to int) in runningTotal"]
    runningTotalCheck -->|No| flushOperation["Call flushOperation(buffer)"]
    storeBuffer --> updateOperator["Set previousOperator to '+'"]
    flushOperation --> updateOperator
    updateOperator --> resetBuffer1["Reset buffer to '0'"]
    resetBuffer1 --> PressNumber2["Press Number (e.g., '5')"]
    PressNumber2 --> buttonClick3["buttonClick() -> calls handleNumber(5)"]
    buttonClick3 --> bufferUpdate2["buffer is updated to '5'"]
    bufferUpdate2 --> PressEqual["Press '='"]
    PressEqual --> buttonClick4["buttonClick() -> calls handleSymbol('=')"]
    buttonClick4 --> checkOperator["Check if previousOperator is not null"]
    checkOperator --> flushOperation2["Call flushOperation(buffer)"]
    flushOperation2 --> resultBuffer["Set buffer to result (converted to string)"]
    resultBuffer --> resetOperator["Set previousOperator to null (reset)"]
    resetOperator --> resetRunningTotal["Reset runningTotal to 0"]
    resetRunningTotal --> displayResult["Result is displayed on the screen"]
    displayResult --> End

```
