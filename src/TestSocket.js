import React, { useEffect, useState } from "react";
import {
  initiateSocket,
  joinRoom,
  leaveRoom,
  subscribeToStream,
} from "./socketFunctions";

export const TestSocket = () => {
  const [count, setCount] = useState();

  const cbf = (msg) => {
    console.log("MSG: ", msg);
    setCount(() => {
      return msg.data;
    });
  };

  useEffect(() => {
    console.log("use Effect ran ");
    initiateSocket("chart");
    joinRoom("join", "chart_room");
    subscribeToStream("chart_data", cbf);

    return () => {
      leaveRoom("leave", "chart_room");
    };
  }, []);

  return (
    <>
      <div>TestSocket</div>
      <div>Count: {count}</div>
    </>
  );
};
