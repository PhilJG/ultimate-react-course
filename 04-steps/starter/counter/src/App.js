import { useState } from "react";

//Date Counter
//step # = how high the count goes up on each press
// count number of +/- days to the current date

// export default function App() {
//   return (
//     // const [count, setCount] = useState(0);
//     <div className="App">
//       <Counter name="Step" />
//       {/* <Counter name="Count" /> */}
//     </div>
//   );
// }

export default function App({ name }) {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState(new Date());

  let date = new Date();
  date.setDate(date.getDate() + count);
  // let options = {
  //   weekday: "short",
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // };
  // let formatDate = date.toLocaleDateString("en-US", options);
  // let currentDate = new Intl.DateTimeFormat("en-US", {
  //   dateStyle: "full",
  // }).format(date);

  // alert(
  //   new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(currentDate)
  // );

  // function addDate(date) {
  //   date.setDate(date.getDate() + step);

  //   return date;
  // }

  return (
    <>
      {/* In your current setup, you're immediately invoking the setStep function when the component renders, which changes the state, causing a re-render, which again invokes setStep, and so on. This creates an infinite loop of re-renders, hence the error. */}
      {/* <button onClick={setStep((s) => s - 1)}>-</button>
      {name}: {step}
    <button onClick={setStep((s) => s + 1)}>+</button> */}
      {/* Step */}
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        {/* Count */}
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
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
    </>
  );
}
