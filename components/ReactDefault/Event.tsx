function EventButton() {
  const handleClick = () => alert("Button Clicked!");

  return <button onClick={handleClick}>클릭</button>;
}

export default EventButton;
