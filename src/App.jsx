import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

const App = () => {
  const [sum, setSum] = useState("");
  // const buttons = ["1", "2", "3", "4","5", "6", "7", "8","9", "0","-", "+","*", "/", "C", "="]
  const buttons = ["C", "B", "()", "+", "7", "8", "9", "-", "4", "5", "6", "*", "1", "2", "3", "/", ".", "0", "%", "="];

  const handleClick = (btn) => {
    if (btn === "=") {
      try {
        setSum(evaluate(sum).toString()); // evaluate creates a value based on sum (calc input), converts to a string then updates the state
      } catch (error) {
        setSum("Error");
      }
    } else if (btn === "C") {
      setSum("");
    } else if (btn === "B") {
      setSum(sum.slice(0, -1)); // makes the specified key act as a  backspace. -1 refers to the final character of a string (e.g -2 being second to last)
    } else {
      setSum(sum + btn); // can't input at all without this else statement (is this because I have "C" and "B" set as specific conditions?)
    }
  };

  return (
    <div className="centre">
      <div className="calcBody">
        <h4 className="inputBox">{sum}</h4>
        <div className="buttonWrap">
          {buttons.map((button, index) => {
            return (
              <button
                key={index}
                onClick={() => handleClick(button)}
                className="btn"
              >
                {button}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
