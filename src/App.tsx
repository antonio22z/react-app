import { useState } from "react";
import Message from "./Message"
import Greetings from "./Greetings"

function App() {
  let [text, setText] = useState("Hell")
  return (
    <>
      <Message name={text} />
      <Greetings changeText={setText} />
    </>)
}

export default App
 