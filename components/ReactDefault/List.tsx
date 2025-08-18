const fruits = ["사과", "바나나", "포토", "딸기"];

function FruitList() {
  return (
    <ul>
      {fruits.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
  );
}

export default FruitList;
