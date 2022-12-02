import React from "react";

export default function Slot({ id, no }) {
  const [empty] = React.useState(id === 1 ? true : false);
  const slotColor = empty ? "bg-green-600" : "bg-red-500";

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl text-gray-500 select-none">Slot {no}</h2>
      <div
        className={`flex items-center justify-center py-2 px-4 w-60 h-60 rounded mt-2 cursor-pointer ${slotColor}`}
      >
        <p className="text-2xl text-white select-none">{empty ? "EMPTY" : "BOOKED"}</p>
      </div>
    </div>
  );
}
