import { useState } from "react";
import Message from "./Message"
import Greetings from "./Greetings"

function App() {
  let [text, setText] = useState("Hell")
  return (
    <div>
      <Message name={text} />
      <Greetings changeText={setText} />
    </div>)
}

export default App
 