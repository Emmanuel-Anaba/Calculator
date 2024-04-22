import { useState } from "react";
const App = () => {
  const [result, setResult] = useState("");
  const clearAll = () => {
    setResult("");
  };
  const goBack = () => {
    setResult(String(result.slice(0, -1)));
  };
  const add = (e) => {
    e = e.target.innerHTML;
    setResult(String(result + e));
  };
  const calc = () => {
    setResult(String(eval(result)));
    localStorage.setItem("lastAns", eval(result));
  };
  const lastAns = () => {
    let item = localStorage.getItem("lastAns");
    setResult(String(result + item));
  };
  const addPeriod = (e) => {
    !result.endsWith(".") &&
      !result.endsWith("+") &&
      !result.endsWith("-") &&
      !result.endsWith("*") &&
      !result.endsWith("/") &&
      add(e);
  };
  const Buttons = [
    { text: "DEL", doSmth: goBack },
    { text: "AC", doSmth: clearAll },
    { text: "Ans", doSmth: lastAns },
    { text: "/", doSmth: add },
    { text: "8", doSmth: add },
    { text: "7", doSmth: add },
    { text: "9", doSmth: add },
    { text: "*", doSmth: add },
    { text: "4", doSmth: add },
    { text: "5", doSmth: add },
    { text: "6", doSmth: add },
    { text: "-", doSmth: add },
    { text: "1", doSmth: add },
    { text: "2", doSmth: add },
    { text: "3", doSmth: add },
    { text: "+", doSmth: add },
    { text: "0", doSmth: add },
    { text: "00", doSmth: add },
    { text: ".", doSmth: addPeriod },
    { text: "=", doSmth: calc },
  ];

  return (
    <>
      <main className="h-svh grid place-items-center text-emerald-100">
        <div className="grid gap-2 bg-emerald-800 p-2 rounded">
          <div className="bg-emerald-600 p-2 rounded">
            <p>{result}</p>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {Buttons.map(({ text, doSmth }) => (
              <button key={text} onClick={(e) => doSmth(e)}>
                {text}
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
