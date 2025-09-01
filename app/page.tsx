"use client";

import { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";

export default function HomePage() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <Header title="TypeScript Blog" />
      <p style={{ fontSize: "20px", margin: "20px 0" }}>
        버튼 클릭 횟수: {count}
      </p>
      <Button text="클릭" onClick={handleClick} />
    </main>
  );
}
