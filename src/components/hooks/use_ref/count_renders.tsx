import { useState, useRef } from "react";

export const CountRenders = () => {
  const [value, setValue] = useState("");
  const count = useRef(0);

  return (
    <>
      <h2>useRef</h2>

      <input
        value={value}
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
          count.current = count.current + 1;
        }}
      />

      <p>{value}</p>
      <p>I have rendered {count.current} times</p>
    </>
  );
};
