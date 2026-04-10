import React, { useEffect, useRef } from "react";
import Searchbar from "../../component/serachbar";

import { useState } from "react";
import ProductCard from "../../component/productCard";
import type { ChatHistory } from "../../assets/chatHistory";
import sendPrompt from "../../api/send-prompt";
import authenticateSession from "../../api/get-token";

function Home() {
  const [search, setSearch] = useState<ChatHistory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const mapResponseToChat = (search: string, response: any): ChatHistory => {
    return {
      id: Date.now().toString(),
      search,
      description: response.message,
      suggestions: response.chips.map((chip) => ({
        id: chip,
        name: chip,
      })),
      timestamp: Date.now(),
      data: response.products,
    };
  };

  const handleSendPrompt = async (search: string) => {
    setLoading(true);
    const token = await authenticateSession();
    if (!token) return;

    const response: any = await sendPrompt(search, {
      token,
      trend: false,
    });
    console.log(response, "response");
    if (!response?.status) {
      setLoading(false);
      return;
    }

    const chatHistory = mapResponseToChat(search, response);

    setSearch((prev) => {
      return [...prev, chatHistory];
    });
    setLoading(false);
  };
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [search, loading]);

  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8  min-h-dvh relative  ">
      <Searchbar handleSearch={handleSendPrompt} loading={loading} />
      <div className="flex flex-col gap-2 pb-28 border'">
        {search.map((item) => {
          return (
            <div key={item.id} className="flex flex-col gap-4">
              <div className="text-black font-bold text-xl">
                <p>{item.search}</p>
              </div>

              <div className="text-gray-800 font-semibold">
                <p>{item.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {item.data.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>

              {item.suggestions.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {item.suggestions.map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSendPrompt(suggestion.name)}
                      className="border-black border text-black px-2 py-1 rounded-full text-sm hover:bg-black hover:text-white"
                    >
                      {suggestion.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {loading && (
          <div className="flex flex-col gap-2 min-h-80" ref={ref}>
            <div className="text-gray-400 font-bold text-xl">
              <p className="animate-pulse">Searching...</p>
            </div>

            <div className="text-gray-400 font-medium flex items-center gap-1">
              <span>Please wait while we fetch the products</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-60 rounded-xl bg-gray-200 animate-pulse"
                />
              ))}
            </div>
          </div>
        )}

        <div ref={ref} />
      </div>
    </div>
  );
}

export default Home;
