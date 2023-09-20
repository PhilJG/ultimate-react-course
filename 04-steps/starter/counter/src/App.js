import { useState } from "react";

//Date Counter
//step # = how high the count goes up on each press
// count number of +/- days to the current date

export default function App() {
  return (
    <div className="App">
      <Counter name="Step" />
      <Counter name="Count" />
      <p># day from today is #</p>
    </div>
  );
}

function Counter({ name }) {
  const [step, setStep] = useState(0);
  // const [count, setCount] = useState(0);
  return (
    <div>
      {/* In your current setup, you're immediately invoking the setStep function when the component renders, which changes the state, causing a re-render, which again invokes setStep, and so on. This creates an infinite loop of re-renders, hence the error. */}
      {/* <button onClick={setStep((s) => s - 1)}>-</button>
      {name}: {step}
      <button onClick={setStep((s) => s + 1)}>+</button> */}
      <button onClick={() => (step >= 1 ? setStep((s) => s - 1) : setStep(0))}>
        -
      </button>
      {name}: {step}
      <button onClick={() => setStep((s) => s + 1)}>+</button>
    </div>
  );
}
