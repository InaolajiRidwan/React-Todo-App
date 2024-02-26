import React from "react";
import { useState } from "react";

export const Usestat = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      {inputValue}
    </div>
  );
};
