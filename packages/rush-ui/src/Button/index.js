import React from "react";

export default function Button({ children }) {
  function handleClick() {
    debugger;
  }
  return <button onClick={handleClick}>{children}</button>;
}
