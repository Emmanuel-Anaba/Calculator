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
    // I want to use value instead of innerHTML
    e = e.target.innerHTML;
    setResult(String(result + e));
  };
  const calc = () => {
    if (eval(result) === undefined) {
      alert("Syntax Error");
    } else {
      setResult(`${eval(result)}`);
      localStorage.setItem("lastAns", eval(result));
    }
  };
  const lastAns = () => {
    let item = localStorage.getItem("lastAns");
    setResult(String(result + item));
  };
  const addPeriodOrOperator = (e) => {
    !result.endsWith(".") &&
      !result.endsWith("+") &&
      !result.endsWith("-") &&
      !result.endsWith("*") &&
      !result.endsWith("/") &&
      add(e);
  };
  const sqr = (n) => {
    n = eval(result);
    n !== "" && setResult(String(n ** 2));
  };
  const sin = (n, r) => {
    n = eval(result);
    r = Math.fround(Math.sin(n * (Math.PI / 180)));
    n === undefined
      ? alert("Syntax Error! Enter The Number First")
      : setResult(r);
  };
  const cos = (n, r) => {
    n = eval(result);
    r = Math.fround(Math.cos(n * (Math.PI / 180)));
    n === undefined
      ? alert("Syntax Error! Enter The Number First")
      : setResult(r);
  };
  const tan = (n, r) => {
    n = eval(result);
    r = Math.fround(Math.tan(n * (Math.PI / 180)));
    n === undefined
      ? alert("Syntax Error! Enter The Number First")
      : setResult(r);
  };

  const Buttons = [
    { text: "AC", doSmth: clearAll },
    { text: "DEL", doSmth: goBack },
    { text: "Ans", doSmth: lastAns },
    { text: "sqr", doSmth: sqr },
    { text: "sin", doSmth: sin },
    { text: "cos", doSmth: cos },
    { text: "tan", doSmth: tan },
    { text: "/", doSmth: addPeriodOrOperator },
    { text: "8", doSmth: add },
    { text: "7", doSmth: add },
    { text: "9", doSmth: add },
    { text: "*", doSmth: addPeriodOrOperator },
    { text: "4", doSmth: add },
    { text: "5", doSmth: add },
    { text: "6", doSmth: add },
    { text: "-", doSmth: addPeriodOrOperator },
    { text: "1", doSmth: add },
    { text: "2", doSmth: add },
    { text: "3", doSmth: add },
    { text: "+", doSmth: addPeriodOrOperator },
    { text: "0", doSmth: add },
    { text: "00", doSmth: add },
    { text: ".", doSmth: addPeriodOrOperator },
    { text: "=", doSmth: calc },
  ];

  return (
    <>
      <main className="h-svh grid place-items-center text-emerald-100 text-2xl">
        <div className="grid gap-2 bg-emerald-800 p-3 rounded w-[90%] md:w-[60%] h-[90%]">
          <div className="bg-emerald-500 rounded p-2 overflow-x-scroll textBox text-right">
            {result}
          </div>
          <div className="grid grid-cols-4 gap-3">
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
