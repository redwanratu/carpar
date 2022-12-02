import { useState, useEffect } from "react";
import "./App.css";
import Slot from "./components/Slot";

function App() {  const [slotState, setSlotState] = useState();

  const fetchData = () => {
    return fetch(`${window.location.href}api/v1/status`)
          .then((res) => res.json())
          .then((data) => setSlotState(data.data[0]))
          .catch((err) => console.log(err)); 
  }

  useEffect(() => {
    fetchData()
  });
  // console.log(`${window.location.href}api/v1/status`)
  return (
    <div className="App">
      <main className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-3xl bold select-none">Automated Car Parking System</h1>
        {slotState && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Slot id={slotState.slot_1} />
            <Slot id={slotState.slot_2} />
            <Slot id={slotState.slot_3} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
