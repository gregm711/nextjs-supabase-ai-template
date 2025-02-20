"use client";
  
  import { useChat } from "@ai-sdk/react";
  import { Bot, User } from "lucide-react";
  
  export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    return (
      <div className="flex flex-col w-full max-w-md mx-auto pb-24 pt-8 space-y-4">
        {messages.map((m) => {
          const isUser = m.role === "user";
          return (
            <div
              key={m.id}
              className={`flex items-start ${isUser ? "justify-end" : "justify-start"}`}
            >
              {!isUser && (
                <div className="flex-shrink-0 mr-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
              )}
              <div
                className={`max-w-xs px-4 py-2 rounded-xl ${
                  isUser
                    ? "bg-blue-500 text-white rounded-tr-none"
                    : "bg-gray-200 text-gray-800 rounded-tl-none"
                }`}
              >
                {m.content}
              </div>
              {isUser && (
                <div className="flex-shrink-0 ml-2">
                  <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-700" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
  
        <form
          onSubmit={handleSubmit}
          className="fixed bottom-0 w-full max-w-md px-4 pb-4"
        >
          <input
            className="w-full p-2 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl focus:outline-none"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    );
  }