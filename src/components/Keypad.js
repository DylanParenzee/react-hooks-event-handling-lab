import React from "react";
import ReactDOM from "react-dom";

function Keypad() {
  return (
    <input
      type="password"
      onChange={() => console.log("Entering password...")}
    />
  );
}

export default Keypad;
