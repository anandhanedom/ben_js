import React, { useRef, useState } from "react";

interface IPerson {
  firstName: string;
  lastName: string;
}

interface IProps {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: IPerson;
  handleChange: () => void;
}

interface ITextNode {
  text: string;
}

const TextField: React.FC<IProps> = ({ handleChange }) => {
  //   const [count, setCount] = useState<number | null>(0);
  const [count, setCount] = useState<ITextNode>({ text: "hello" });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
