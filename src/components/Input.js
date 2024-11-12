// import React from "react";
// import { useContext } from "react";
// import { functionsContext } from "../context/context";
// import { GoArrowUp } from "react-icons/go";
// import { FaFileUpload } from "react-icons/fa";
// import { RiFolderUploadLine } from "react-icons/ri";


// export const Input = (props) => {
//   const functions = useContext(functionsContext);
//   return (
//     <>
//       <div className="flex justify-center fixed bottom-5 left-0 right-0 mx-auto">
//         <div className="flex bg-gray-800 rounded-full p-2 w-[85vw] ">
//         <RiFolderUploadLine size={30}style={{width:"50px", padding:"2px",margin:"2px"}}/>
//           <input
//             type="text"
//             placeholder="Type your message here"
//             value={functions.input}
//             onChange={functions.handleChange}
//             className="flex-1 !bg-transparent border-none outline-none text-white text-base placeholder-gray-400"
//             onKeyDown={functions.handleKeyDown}
//           ></input>

//           <button
//             onClick={functions.handleClick}
//             className="bg-transparent text-white font-semibold hover:text-neutral-400 py-2 px-4 "

//           >
//             <GoArrowUp />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

import { useContext } from "react";
import { functionsContext } from "../context/context";
import { GoArrowUp } from "react-icons/go";
import { RiFolderUploadLine } from "react-icons/ri";

export const Input = (props) => {
  const functions = useContext(functionsContext);
  return (
    <>
      <div className="flex justify-center fixed bottom-5 left-0 right-0 mx-auto">
        <div className="flex bg-gray-800 rounded-full p-2 w-[85vw]">
          <RiFolderUploadLine
            size={30}
            style={{ width: "50px", padding: "2px", margin: "2px" }}
          />
          <input
            type="text"
            placeholder="Type your message here"
            value={functions.input}
            onChange={functions.handleChange}
            className="flex-1 !bg-transparent border-none outline-none text-white text-base placeholder-gray-400"
            onKeyDown={functions.handleKeyDown}
          />
          {/* Conditionally render the loader if loading is true */}
          {functions.loading ? (
            <div className="flex items-center justify-center animate-spin h-8 w-8 border-t-4 border-blue-500 rounded-full ml-2"></div>
          ) : (
            <button
              onClick={functions.handleClick}
              className="bg-transparent text-white font-semibold hover:text-neutral-400 py-2 px-4"
            >
              <GoArrowUp />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

