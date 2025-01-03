import React from "react";
import ChatBot from "react-chatbotify";
const ChatBoot = () => {
  const steps = [
    {
      id: "0",
      message: "Hey Geek!",
      end: true,
    },
  ];
  return (
    <div>
      <ChatBot steps={steps} />
    </div>
  );
};
export default ChatBoot;
