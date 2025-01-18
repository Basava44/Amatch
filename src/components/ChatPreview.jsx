import React from "react";

const ChatPreview = ({
  avatarUrl,
  name,
  lastMessage,
  timestamp,
  isLastItem = false,
}) => {
  return (
    <>
      <div className="flex items-center gap-3 p-3 hover:bg-black/5 transition-colors cursor-pointer">
        {/* Avatar */}
        <div className="flex-shrink-0 w-12 h-12">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Message Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h3 className="text-base text-gray-900 truncate">{name}</h3>
            <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
              {timestamp}
            </span>
          </div>
          <p className="text-xs truncate text-gray-500">{lastMessage}</p>
        </div>
      </div>
      {!isLastItem && <div className="h-[0.5px] bg-gray-300 ml-[60px]" />}
    </>
  );
};
export default ChatPreview;
