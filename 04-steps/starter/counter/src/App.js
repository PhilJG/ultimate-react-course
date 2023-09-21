import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState(new Date());

  let date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        {/* Count */}
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>
          <input
            type="number"
            value={count}
            onChange={(e) => {
              e.preventDefault();
              setCount(+e.target.value);
            }}
          />
        </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        {/* {count} {count === 1 || -1 ? "day" : "days"} from today is{" "} */}
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${count} days ago was `}
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
