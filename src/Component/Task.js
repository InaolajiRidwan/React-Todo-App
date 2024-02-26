import React from "react";

import deletebtn2 from "./deletebtn2.png";

export const Task = (props) => {
  return (
    <div>
      <span className="italic text-xl mt-5">{props.taskName}</span>
      <button
        className="ms-10 mt-10 hover:bg-red-400 "
        onClick={() => props.deleteTask(props.id)}
      >
        <img src={deletebtn2} className="h-6" alt="" />
      </button>
    </div>
  );
};
