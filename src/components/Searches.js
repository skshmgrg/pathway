import React from "react";
import { MdContentCopy } from "react-icons/md";

function Searches(props) {
  return (
    <div className="flex">
      <div className="w-[200px] overflow-hidden whitespace-nowrap text-ellipsis m-2" on>
        {props.text}
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(props.text);
        }}
      >
        <MdContentCopy />
      </button>
    </div>
  );
}
export default Searches;
