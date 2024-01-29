import { useState } from "react";
import "./App.css";
import SliderComponent from "./assets/Components/SliderComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button value="Male">Please choose your gender</button>
      <SliderComponent />
    </>
  );
}

export default App;
