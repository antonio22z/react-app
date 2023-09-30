import { useState } from 'react';

function Message(props: { name: string; }) {
  const { name } = props;
  const [textColor, setTextColor] = useState(getRandomColor());

  function getRandomColor() {
    const colors = ['#FF5733', '#33FFA2', '#336BFF', '#FF33E0', '#FFFF33', '#000000'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const greetingStyle = {
    color: textColor,
  }

  function changeColor() {
    setTextColor(getRandomColor());
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline"
       style={greetingStyle}>Hello {name}!</h1>
      <button className="btn" onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Message;
