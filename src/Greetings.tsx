import React, { useState } from 'react';

function Greetings(props: { changeText: (text: string) => void; }) {
  const { changeText } = props;
  const [name, setName] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      clickButton();
    }
  };

  const clickButton = () => {
    changeText(name);
  };

  // Define inline styles for elements
  const inputStyle = {
    borderColor: '#2196F3', // Blue border color
    backgroundColor: '#EFEFEF', // Light gray background color
    color: '#333', // Dark text color
  };

  const buttonStyle = {
    backgroundColor: '#FF5733', // Orange background color
    color: '#fff', // White text color
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  };

  return (
    <div>
      <input
        placeholder="Type Name Here"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        style={inputStyle}
      />
      <button className="btn btn-primary" id="clickButton" onClick={clickButton} style={buttonStyle}>
        
        Click here
      </button>
    </div>
  );
}

export default Greetings;
