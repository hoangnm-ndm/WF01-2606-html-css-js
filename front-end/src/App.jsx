import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

// SPA = Single Page Application

function App() {
  // state =  trạng thái của dữ liệu
  const [count, setCount] = useState(0);

  const incrementHanler = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 3);
    setCount((prev) => prev + 6);

    console.log(count);
  };

  const user = {
    name: "Hoang",
  };
  return (
    <>
      {/* props = properties */}
      <Header user={user} count={count} />
      <main>
        <h1>Chao ban </h1>
        <p style={{ fontSize: "24px" }}>{count}</p>
        <button onClick={incrementHanler}>Increment</button>
      </main>
      <footer>Copyright Codefarm</footer>
    </>
  );
}

export default App;
