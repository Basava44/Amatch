import React from "react";
import ChatPreview from "./ChatPreview";

const ChatList = ({ chatList }) => {
  const selectChat = (id) => {
    console.log(id);
  };
  return (
    <div className="space-y-1">
      {chatList.map((chat, index) => (
        <div onClick={() => selectChat(chat.id)}>
          <ChatPreview
            key={chat.id}
            avatarUrl={chat.avatarUrl}
            name={chat.name}
            lastMessage={chat.lastMessage}
            timestamp={chat.timestamp}
            isRead={chat.isRead}
            isLastItem={index === chatList.length - 1}
          />
        </div>
      ))}
    </div>
  );
};

export default ChatList;
