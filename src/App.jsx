import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const incr = () => {
    setCount(count + 1);
  };

  const decr = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <Header />
      <main className="container">
        <div className="counter">
          <button className="minus" onClick={decr}>
            {count > 0 ? "-" : " "}
          </button>
          <p className="count">{count}</p>
          <button className="plus" onClick={incr}>
            {count < 10 ? "+" : " "}
          </button>
        </div>

        <button className="reset" onClick={reset}>
          Reset
        </button>
      </main>

      <Footer />
    </>
  );
}

export default App;
