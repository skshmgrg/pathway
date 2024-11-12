import React, { useContext, useState } from "react";
import { UserMessage } from "./UserMessage";
import { ResponseMessage } from "./ResponseMessage";
import { Input } from "./Input";
import { functionsContext } from "../context/context";

export const Chat = () => {
  const global=useContext(functionsContext)
  return (
    <>
        <div className="flex flex-col">
          {(global.messages).map((value, index) =>
            value.type === "prompt" ? (
              <UserMessage key={index} message={value.text} />
            ) : (
              <ResponseMessage key={index} message={value.text} />
            )
          )}
        </div>
        <Input value={global.input} className={"fixed "} />
    </>
  );
};

export default Chat;


// import React, { useContext, useState, useMemo } from "react";
// import { UserMessage } from "./UserMessage";
// import { ResponseMessage } from "./ResponseMessage";
// import { Input } from "./Input";
// import { functionsContext } from "../context/context";

// export const Chat = () => {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleClick();
//     }
//   };
//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };
//   const handleClick = () => {
//     if (input.trim()) {
//       setMessages((prev) => [
//         ...prev,
//         { type: "prompt", text: input },
//         { type: "response", text: "This is a response" },
//       ]);
//       setInput("");
//     }
//   };

//   // Use useMemo to update the context value whenever input or messages changes
//   const contextValue = useMemo(
//     () => ({
//       handleClick,
//       handleChange,
//       handleKeyDown,
//       input,
//       messages,
//     }),
//     [input, messages] // dependencies to watch
//   );

//   return (
//     <functionsContext.Provider value={contextValue}>
//       <div className="flex flex-col">
//         {messages.map((value, index) =>
//           value.type === "prompt" ? (
//             <UserMessage key={index} message={value.text} />
//           ) : (
//             <ResponseMessage key={index} message={value.text} />
//           )
//         )}
//       </div>
//       <Input
//         value={input}
//         onKeyDown={handleKeyDown}
//         onChange={handleChange}
//         className="fixed"
//       />
//     </functionsContext.Provider>
//   );
// };

// export default Chat;
