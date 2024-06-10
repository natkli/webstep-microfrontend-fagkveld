import "./Button.css";
import { useState } from "react";

export function Button() {
  const [count, setCount] = useState(0);

  return (
    <button className="count-button" onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}
