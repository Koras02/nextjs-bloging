import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>카운터: {counter} </h1>
      <button onClick={() => setCounter(counter + 1)}>클릭</button>
    </div>
  );
}

export default Counter;
