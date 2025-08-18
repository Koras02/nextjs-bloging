interface HelloProps {
  name: string;
  age: number;
}

// 자식
const Hello = ({ name, age }: HelloProps) => {
  return (
    <h1>
      Hello, {name}, {age}
    </h1>
  );
};

export default Hello;
