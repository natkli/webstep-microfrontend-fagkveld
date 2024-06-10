import "./App.css";
import { Button } from "remoteApp/Button";
import { useStore } from "remoteApp/store";

function App() {
  const [count] = useStore();
  return (
    <>
      <h1>Host application</h1>
      <p>Shared state: {count}</p>
      <div className="card">
        <Button />
      </div>
    </>
  );
}

export default App;
