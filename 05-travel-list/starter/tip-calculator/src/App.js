import "./App.css";
import { useState } from "react";

function App() {
  const [price, setPrice] = useState(0.0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  // const [totalTip, setTotalTip] = useState(null);
  // const [total, setTotal] = useState(0);

  const tip = price * ((percentage1 + percentage2) / 2 / 100);

  function resetApp() {
    setPrice(0);
  }

  return (
    <div className="App">
      <Price price={price} onSetPrice={setPrice} />
      <Satisfaction percentage={percentage1} setPercentage={setPercentage1}>
        How did you like the service?
      </Satisfaction>

      <Satisfaction percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service?
      </Satisfaction>
      {price > 0 && (
        <>
          <Result>
            You pay {+price + +tip} ({price} + {`$${tip}`} tip)
          </Result>
          <button onClick={resetApp}>Reset</button>
        </>
      )}
    </div>
  );
}

function Price({ price, onSetPrice }) {
  return (
    <>
      <p>
        How much was the bill?{" "}
        <input
          type="number"
          value={price}
          onChange={(e) => onSetPrice(Number(e.target.value))}
        ></input>
      </p>
    </>
  );
}

function Satisfaction({ children, percentage, setPercentage }) {
  // function handlePercentChange(v) {
  //   setPercentage(v);
  //   console.log(percentage);
  // }

  return (
    <>
      <p>
        {children}{" "}
        <select
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
        >
          <option value={0}>Dissatisfied(0%)</option>
          <option value={5}>It was okay(5%)</option>
          <option value={10}>It was good(10%)</option>
          <option value={20}>Absolutely amazing!(20%)</option>
        </select>
      </p>
    </>
  );
}

function Result({ children }) {
  return <h1>{children}</h1>;
}

export default App;
