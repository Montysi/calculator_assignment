import { useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'

const App = () => {

  const [sum, setSum] = useState("")
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
    } else {
      setSum(sum + btn); // can't input at all without this else statement (figure out why)
    }
  };

  return (
      <div className="centre">
      <div className="calcBody">
        <h4 className="inputBox">{sum}</h4>
        <div className="buttonWrap">
          {
            buttons.map((button, index) => {
              return (
                <button  key={index} onClick={() => handleClick(button)} className="btn">{button}</button>
              )
            })
          }
        </div>
      </div>

      </div>
  )
}

export default App