import { useEffect, useState } from "react";

function Car({ name, address }) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(() => count + 1);
  }

  // Component Did Mount
  useEffect(() => {
    console.log("Component Did Mount Executed");

    // Component Will Unmount
    return () => {
      alert("Halaman ditutup ya");
      console.log("Component Will Unmount Executed");
    };
  }, []);

  // Component Did Update
  useEffect(() => {
    console.log("Component Did Update Executed");
  }, [count]);

  return (
    <h1 onClick={incrementCount}>
      Hello {name} in {address}
    </h1>
  );
}

export default Car;
