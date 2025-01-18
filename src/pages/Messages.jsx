import React, { useState } from "react";
import { ChevronLeft, Search, MessageCircle, X } from "lucide-react";
import ChatList from "../components/ChatList";
import { chatList } from "../DummyDataForDev/chats";

const Messages = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const hasMessages = chatList.length;

  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setSearchQuery("");
    }
  };

  const filteredChats = searchQuery
    ? chatList.filter((chat) =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : chatList;

  return (
    <div className="min-h-screen bg-[#FFF5F0] relative">
      <div className="absolute top-0 left-0 right-0 h-3/4 bg-gradient-to-b from-[#fb4033]/10 to-transparent" />
      <div className="relative flex flex-col px-2 pt-6 max-w-md mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center h-8">
          {!isSearchActive ? (
            <>
              <ChevronLeft className="w-7 h-7 font-bold transition-transform duration-300 group-hover:translate-x-1" />
              <Search
                className="w-6 h-6 cursor-pointer hover:text-[#fb4033] transition-colors duration-300"
                onClick={handleSearchToggle}
              />
            </>
          ) : (
            <div className="w-full flex items-center gap-2 bg-white rounded-md h-8 px-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search messages..."
                className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                autoFocus
              />
              {searchQuery && (
                <X
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-[#fb4033]"
                  onClick={() => setSearchQuery("")}
                />
              )}
              <button
                onClick={handleSearchToggle}
                className="text-[#fb4033] text-xs font-medium ml-1"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="text-2xl pl-2 pt-4 font-bold">Messages</div>

        {hasMessages ? (
          <>
            {filteredChats.length ? (
              <div className="conversations mt-4">
                <ChatList chatList={filteredChats} />
              </div>
            ) : (
              <div className="flex flex-col items-center mt-40 text-sm text-gray-500">Search not found</div>
            )}
          </>
        ) : (
          <div className="">
            <div className="flex flex-col items-center mt-40">
              <MessageCircle className="w-20 h-20 text-[#fb4033]/30 mb-6" />
              <h3 className="text-xl font-light text-gray-800 mb-2">
                No messages yet
              </h3>
              <p className="text-gray-500 text-center text-sm max-w-[250px]">
                Don't worry! Your perfect match is just around the corner. Keep
                exploring and the conversations will flow naturally.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
