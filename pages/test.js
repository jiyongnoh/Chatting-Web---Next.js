import { useState } from "react";
import axios from "axios";

export default function List() {
  const [text, setText] = useState("default");

  const testHandler = async () => {
    const message = await axios.post("http://localhost:3001/user", {
      msg: "Success Test",
    });
    setText(message.data);
  };

  return (
    <div className="container">
      <h4>Test Page</h4>
      <button onClick={testHandler}>Test</button>
      <div>{text}</div>
    </div>
  );
}
