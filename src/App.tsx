import { useState } from "react";

function App() {
  const [firstArg, setFirstArg] = useState(1);
  const [secondArg, setSecondArg] = useState(1);

  const result = window.native.sum(firstArg, secondArg)

  return (
    <>
      <label className="font-bold">
        First arg:
        <input
          value={firstArg}
          onChange={(e) => setFirstArg(Number(e.target.value))}
        />
      </label>
      <label>
        Second arg:
        <input
          value={secondArg}
          onChange={(e) => setSecondArg(Number(e.target.value))}
        />
      </label>
      <label>Result: {result}</label>
    </>
  );
}

export default App;
