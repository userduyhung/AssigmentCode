import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Tôi là trợ lý AI về Tư tưởng Hồ Chí Minh. Bạn muốn hỏi gì?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Hàm gọi Gemini API chuẩn
  const fetchGeminiResponse = async (userMessage: string): Promise<string> => {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
      if (!apiKey || apiKey === 'undefined') {
        return "Lỗi: Chưa cấu hình API key Gemini. Vui lòng thêm VITE_GEMINI_API_KEY vào file .env và khởi động lại server.";
      }
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
      const payload = {
        contents: [
          {
            role: "user",
            parts: [
              { text: userMessage }
            ]
          }
        ]
      };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const errorText = await res.text();
        console.error('Gemini API error:', res.status, res.statusText, errorText);
        if (res.status === 400) {
          return "Lỗi 400: API key không hợp lệ, hoặc request không đúng định dạng. Vui lòng kiểm tra lại key và nội dung gửi lên.";
        }
        return `Lỗi Gemini API: ${res.status} - ${res.statusText}`;
      }
      const data = await res.json();
      if (
        data &&
        data.candidates &&
        data.candidates[0] &&
        data.candidates[0].content &&
        data.candidates[0].content.parts &&
        data.candidates[0].content.parts[0] &&
        data.candidates[0].content.parts[0].text
      ) {
        return data.candidates[0].content.parts[0].text as string;
      }
      return "Không nhận được phản hồi từ Gemini API.";
    } catch (error) {
      console.error("Error fetching Gemini API:", error);
      return "Lỗi khi kết nối Gemini API.";
    }
  };

  // Hàm gửi tin nhắn
  const handleSendMessage = async () => {
    if (!inputText.trim() || loading) return;
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    const botReply = await fetchGeminiResponse(inputText);
    const botMessage: Message = {
      id: messages.length + 2,
      text: botReply,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botMessage]);
    setLoading(false);
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 h-96 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-2xl text-sm ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border shadow-sm text-gray-800'
                  }`}
                >
                  <p>{m.text}</p>
                  <p className="text-xs mt-1 text-gray-400">
                    {formatTime(m.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            {loading && <div className="italic text-sm text-gray-500">Đang trả lời...</div>}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Hỏi về Tư tưởng Hồ Chí Minh..."
              className="flex-1 px-3 py-2 border rounded-full text-sm focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={loading || !inputText.trim()}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

