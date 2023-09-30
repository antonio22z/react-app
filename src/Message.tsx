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
      <div className="flex w-full">
      <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
        <h1 className="text-3xl font-bold"  style={greetingStyle}>Hello {name}</h1>
        </div>
      <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">WelcomeBack</div>
    </div>

      <button className="btn btn-primary bg-white" onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Message;
