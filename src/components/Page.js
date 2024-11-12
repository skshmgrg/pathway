
import { useState, useContext } from "react";
import { Chat } from "./Chat.js";
import { functionsContext, messagesContext } from "../context/context.js";
import Navbar from "./Navbar.js";
import Previoussearch from "./Previoussearch.js";

function Page() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleClick();
    }
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    if (input.trim()) {
      setMessages((prev) => [
        ...prev,
        { type: "prompt", text: input },
        { type: "response", text: "This is a response" },
      ]);
      setInput("");
    }
  };
  return (
    <>
      <functionsContext.Provider
        value={{
          handleClick: handleClick,
          handleChange: handleChange,
          handleKeyDown: handleKeyDown,
          input: input,
          messages: messages,
        }}
      >
        <Navbar />
        <Chat />
        {/* <Previoussearch /> */}
      </functionsContext.Provider>
    </>
  );
}
export default Page;
