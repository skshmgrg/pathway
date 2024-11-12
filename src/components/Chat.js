// import React, { useContext, useState } from "react";
// import { UserMessage } from "./UserMessage";
// import { ResponseMessage } from "./ResponseMessage";
// import { FileUpload } from "./FileUpload";
// import { Input } from "./Input";
// import { functionsContext } from "../context/context";

// export const Chat = () => {
//   const global=useContext(functionsContext)
//   return (
//     <>
//         <div className="flex flex-col max-h-[78vh] overflow-hidden overflow-y-auto">
//           {(global.messages).map((value, index) =>
//             value.type === "prompt" ? (
//               <UserMessage key={index} message={value.text} />
//             ) : (
//               <ResponseMessage key={index} message={value.text} />
//             )
//           )}
//         </div>
//         <Input value={global.input} className={"fixed "} />
//         {/* <FileUpload/> */}
//     </>
//   );
// };

// export default Chat;


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


// import React, { useContext, useEffect, useRef } from "react";
// import { UserMessage } from "./UserMessage";
// import { ResponseMessage } from "./ResponseMessage";
// import { Input } from "./Input";
// import { functionsContext } from "../context/context";

// export const Chat = () => {
//   const global = useContext(functionsContext);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Scroll to the bottom whenever messages change
//     if (containerRef.current) {
//       containerRef.current.scrollTop = containerRef.current.scrollHeight;
//     }
//   }, [global.messages]);

//   return (
//     <>
//       <div
//         ref={containerRef}
//         className="flex flex-col max-h-[78vh] overflow-y-auto"
//       >
//         {global.messages.map((value, index) =>
//           value.type === "prompt" ? (
//             <UserMessage key={index} message={value.text} />
//           ) : (
//             <ResponseMessage key={index} message={value.text} />
//           )
//         )}
//       </div>
//       <Input value={global.input} className="fixed bottom-0 w-full" />
//       {/* <FileUpload /> */}
//     </>
//   );
// };

// export default Chat;


import React, { useContext, useEffect, useRef } from "react";
import { UserMessage } from "./UserMessage";
import { ResponseMessage } from "./ResponseMessage";
import { Input } from "./Input";
import { functionsContext } from "../context/context";

export const Chat = () => {
  const global = useContext(functionsContext);
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [global.messages]);

  return (
    <>
      <div
        ref={containerRef}
        className="flex flex-col max-h-[78vh] overflow-y-auto overflow-x-hidden w-full px-4"
      >
        {global.messages.map((value, index) =>
          value.type === "prompt" ? (
            <UserMessage key={index} message={value.text} />
          ) : (
            <ResponseMessage key={index} message={value.text} />
          )
        )}
      </div>
      <Input value={global.input} className="fixed bottom-0 w-full" />
      {/* <FileUpload /> */}
    </>
  );
};

export default Chat;
