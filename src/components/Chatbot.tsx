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
      text: "Xin chào! Tôi là trợ lý AI chuyên về Tư tưởng Hồ Chí Minh. \n\nTôi có thể giúp bạn:\n• Tìm hiểu tư tưởng, triết lý của Bác Hồ\n• Nghiên cứu lịch sử cách mạng Việt Nam\n• Ứng dụng đạo đức cách mạng trong cuộc sống\n• Hiểu về giáo dục, văn hóa dân tộc\n\nHãy đặt câu hỏi về những chủ đề này nhé!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Hàm gọi Gemini API với system prompt thông minh
  const fetchGeminiResponse = async (userMessage: string): Promise<string> => {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
      if (!apiKey || apiKey === 'undefined') {
        return "Lỗi: Chưa cấu hình API key Gemini. Vui lòng thêm VITE_GEMINI_API_KEY vào file .env và khởi động lại server.";
      }

      // System prompt nâng cao để trả lời chỉnh chu
      const systemPrompt = `Bạn là Giáo sư AI chuyên về Tư tưởng Hồ Chí Minh - một chuyên gia hàng đầu với nhiều năm nghiên cứu.

🎯 CHUYÊN MÔN SÂUỘNG:
- Tư tưởng, triết lý, đạo đức Hồ Chí Minh
- Lịch sử cách mạng và phong trào giải phóng dân tộc
- Giáo dục lý tưởng cách mạng, đạo đức
- Ứng dụng tư tưởng HCM trong thời đại mới
- Văn hóa, truyền thống dân tộc Việt Nam

📋 CẤU TRÚC TRẢ LỜI CHUẨN:
1. **MỞ ĐẦU**: Chào hỏi và xác nhận hiểu câu hỏi
2. **PHÂN TÍCH CHÍNH**: Trả lời chi tiết, có dẫn chứng
3. **VÍ DỤ/MINH HỌA**: Đưa ra ví dụ cụ thể nếu có thể
4. **KẾT LUẬN**: Tóm tắt và ý nghĩa thực tiễn

✨ PHONG CÁCH TRẢ LỜI:
- Dùng **đầu dòng, số thứ tự** để dễ đọc
- **In đậm** các khái niệm quan trọng
- Dẫn chứng từ **tác phẩm, di chúc** của Bác Hồ
- Kết nối với **thời đại hiện tại**
- Ngôn ngữ **trang trọng nhưng dễ hiểu**

🚫 TỪ CHỐI LỊCH SỰ: Các câu hỏi hoàn toàn ngoài chuyên môn (toán học cơ bản, thể thao giải trí, công nghệ IT không liên quan)

📝 FORMAT MẪU:
"Câu hỏi rất hay về [chủ đề]!

**[Phần chính - phân tích chi tiết]**

**Ví dụ cụ thể:**
- [Ví dụ 1]
- [Ví dụ 2]

**Ý nghĩa thực tiễn:**
[Kết nối với hiện tại]

Hy vọng thông tin này hữu ích cho bạn!"`;

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
      const payload = {
        contents: [
          {
            role: "user",
            parts: [
              { text: `${systemPrompt}\n\n---\n\nCâu hỏi của sinh viên: ${userMessage}` }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1500,
        }
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
    setInputText(''); // Clear input immediately after sending
    setLoading(true);
    const botReply = await fetchGeminiResponse(userMessage.text);
    const botMessage: Message = {
      id: messages.length + 2,
      text: botReply,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botMessage]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

  // Hàm format tin nhắn để hiển thị đẹp hơn
  const formatMessage = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => (
        <span key={index}>
          {line}
          {index < text.split('\n').length - 1 && <br />}
        </span>
      ));
  };

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
              <span className="font-semibold">Giáo sư AI - Tư tưởng HCM</span>
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
                  className={`${
                    m.sender === 'user' ? 'max-w-xs' : 'max-w-sm'
                  } px-4 py-3 rounded-2xl text-sm ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border shadow-sm text-gray-800'
                  }`}
                >
                  <div className={`${m.sender === 'bot' ? 'leading-relaxed' : ''}`}>
                    {formatMessage(m.text)}
                  </div>
                  <p className={`text-xs mt-2 ${
                    m.sender === 'user' ? 'text-blue-200' : 'text-gray-400'
                  }`}>
                    {formatTime(m.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border shadow-sm rounded-2xl px-4 py-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span>Giáo sư đang suy nghĩ...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="VD: Cách thực hành đạo đức cách mạng? Ý nghĩa tư tưởng Hồ Chí Minh?"
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

