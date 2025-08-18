import React, { useRef } from "react";

function RefUse() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focus = () => inputRef.current?.focus();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focus}>포커스 추가</button>
    </>
  );
}

export default RefUse;
