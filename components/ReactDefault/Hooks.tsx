import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(id); // cleanup
  }, []);

  return (
    <div>
      <p>{time} 초 경과</p>
    </div>
  );
};

export default Hooks;
