import React, { useEffect, useState } from "react";
import { joinRoom, leaveRoom, subscribeToChat } from "./socketFunctions";


export const TestSocket = () => {
  const [count, setCount] = useState();
  // const handleSend = () => {
  //   console.log("Sending..........");
  //   socket.emit("greeksheet_client_connected", { msg: "Hi I am React..." });
  //   console.log("Sent..........");
  // };

  useEffect(() => {
    joinRoom('greeksheet','join','greeksheet')
  
    return () => {
      leaveRoom('leave','greeksheet')
    }
  }, [])

  const getGreekData = (msg) => {
    console.log(msg);
    setCount(()=>{
      
      return msg.count
    })
  }
  
  subscribeToChat('live_count',getGreekData)

  

  // socket.on("live_count", (msg) => {
  //   console.log(msg);
  //   setCount(()=>{
      
  //     return msg.count
  //   })
  // });

  return (
    <>
      <div>TestSocket</div>
      <div>Count: {count}</div>
      <button onClick={() => joinRoom('greeksheet','join','greeksheet')}>Join Room</button>
      <button onClick={() => leaveRoom('leave','greeksheet')}>Leave Room</button>
    </>
  );
};