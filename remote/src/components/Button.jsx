import "./Button.css";
import { useStore } from "../store";

export function Button() {
  const [count, setCount] = useStore(0);

  return (
    <button className="count-button" onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}
