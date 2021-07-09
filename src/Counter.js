import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  //let count = 0;

  const [count, setCount] = useState(0);

  const handleIncrease = (event) => setCount(count + 1);
  const handleDecrease = (evetn) => setCount(count - 1);

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleClick}>
      <div>
        Counter
        <br />
        <button type="submit" onClick={handleDecrease}>
          -
        </button>
        {count}
        <button type="submit" onClick={handleIncrease}>
          +
        </button>
      </div>
    </form>
  );
}

export default Counter;
