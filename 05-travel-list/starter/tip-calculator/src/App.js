import "./App.css";
import { useState } from "react";

function App() {
  const [price, setPrice] = useState(0.0);
  const [tip, setTip] = useState(0);
  // const [totalTip, setTotalTip] = useState(null);
  // const [total, setTotal] = useState(0);

  function handlePriceChange(v) {
    setPrice(v);
  }

  function handleTipChange(v) {
    setTip(v * +price);
    console.log(`tip value ${tip}`);
  }

  // function totalChange() {
  //   setTotal(price + tip);
  //   console.log(`Total price is ${total}`);
  // }

  function resetApp() {
    setTip(0);
    setPrice(0);
  }

  return (
    <div className="App">
      <Price price={price} onSetPrice={handlePriceChange} />
      <Satisfaction tip={tip} onTipChange={handleTipChange}>
        How did you like the service?
      </Satisfaction>

      <Satisfaction tip={tip} onTipChange={handleTipChange}>
        How did your friend like the service?
      </Satisfaction>

      <Result>
        You pay {+price + +tip} ({+price} + {`${Math.round(tip)}%`} tip)
      </Result>
      <button onClick={resetApp}>Reset</button>
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
          onChange={(e) => onSetPrice(e.target.value)}
        ></input>
      </p>
    </>
  );
}

function Satisfaction({ children, tip, onTipChange }) {
  return (
    <>
      <p>
        {children}{" "}
        <select name="" id="" onChange={(e) => onTipChange(e.target.value)}>
          <option value={0}>Dissatisfied(0%)</option>
          <option value={0.05}>It was okay(5%)</option>
          <option value={0.1}>It was good(10%)</option>
          <option value={0.2}>Absolutely amazing!(20%)</option>
        </select>
      </p>
    </>
  );
}

function Result({ children }) {
  return <h1>{children}</h1>;
}

export default App;
