import  { useState } from 'react';
import { Sparkles, RotateCcw, CheckCircle, Brain, ArrowRight, Star, Zap, Target } from 'lucide-react';

const AITools = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<number[]>([]);

  const flashcards = [
    {
      question: "Theo tư tưởng Hồ Chí Minh, yếu tố then chốt quyết định sự tồn tại và phát triển của Đảng cầm quyền là gì?",
      answer: "Yếu tố then chốt là niềm tin của nhân dân. Đây được coi là nền tảng vững chắc, là nguồn sức mạnh to lớn và là chỗ dựa để Đảng tồn tại, phát triển và lãnh đạo đất nước. Hồ Chí Minh từng cảnh báo nếu Đảng sa vào quan liêu, tham nhũng, xa dân thì nguy cơ mất lòng tin của nhân dân là hiện hữu. Mất lòng tin của nhân dân là mất tất cả.",
    },
    {
      question: "Chủ tịch Hồ Chí Minh đã chỉ ra ba nguy cơ lớn nhất nào có thể dẫn đến sự suy thoái, biến chất của Đảng cầm quyền?",
      answer: `Ba nguy cơ lớn nhất mà Chủ tịch Hồ Chí Minh đã chỉ ra là:
1. Quan liêu: Đây là căn bệnh xa dân, không lắng nghe ý kiến của dân, làm việc theo lối hành chính, máy móc và tạo ra khoảng cách lớn giữa Đảng và dân.
2. Tham nhũng: Bác Hồ coi đây là "kẻ thù nội xâm", là "giặc ở trong lòng", làm xói mòn đạo đức và phá hoại niềm tin của dân vào sự công bằng, minh bạch.
3. Xa rời quần chúng: Khi cán bộ Đảng không còn coi dân là gốc và không chiến đấu vì dân thì tất yếu sẽ bị dân quay lưng.`,
    },
    {
      question: "Theo tài liệu, niềm tin của nhân dân đối với Đảng được hình thành từ những yếu tố nào?",
      answer: `Niềm tin của nhân dân đối với Đảng được hình thành từ 3 yếu tố chính:
1. Đường lối đúng đắn phục vụ lợi ích dân tộc và nhân dân.
2. Đội ngũ cán bộ, đảng viên gương mẫu, trong sạch.
3. Sự gần gũi, gắn bó mật thiết với nhân dân. Nếu thiếu một trong những yếu tố này, niềm tin sẽ bị suy giảm.`,
    },
    {
      question: "Bài học từ cuộc khủng hoảng chính trị ở Nepal minh chứng cho lời cảnh báo nào của Hồ Chí Minh về Đảng cầm quyền?",
      answer: `Ví dụ từ Nepal cho thấy những lời cảnh báo của Hồ Chí Minh là một quy luật thực tiễn khắc nghiệt. Cụ thể:
• Mất đoàn kết nội bộ và sa vào đấu đá quyền lực: Điều này đi ngược lại nguyên tắc "đoàn kết, thống nhất trong Đảng".
• Quan liêu, tham nhũng và xa rời nhân dân: Các chính phủ đối mặt với cáo buộc tham nhũng nghiêm trọng, khiến khoảng cách giữa Đảng và nhân dân ngày càng lớn.
• Hậu quả: Mất niềm tin của nhân dân dẫn đến bất ổn chính trị kéo dài, các đảng truyền thống mất dần sự ủng hộ. Điều này chứng minh rằng một Đảng cầm quyền nếu không trong sạch, không vì dân thì sớm muộn cũng sẽ đối mặt với sự quay lưng của chính người dân.`,
    },
    {
      question: "Câu nói nào của Hồ Chí Minh được trích dẫn để nhấn mạnh tầm quan trọng của nhân dân đối với sự thành bại của mọi công việc?",
      answer: `Câu nói được trích dẫn là: "Dễ mười lần không dân cũng chịu, khó trăm lần dân liệu cũng xong".
Câu nói này khẳng định rằng khi có được lòng tin của dân, Đảng có thể vượt qua mọi khó khăn. Ngược lại, khi đã đánh mất niềm tin đó, dù nhiệm vụ dễ dàng đến đâu cũng không thể hoàn thành.`,
    },
  ];

  const progress = (studiedCards.length / flashcards.length) * 100;

  const handleCardFlip = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNext = () => {
    if (!studiedCards.includes(currentCard)) {
      setStudiedCards([...studiedCards, currentCard]);
    }
    setCurrentCard((currentCard + 1) % flashcards.length);
    setShowAnswer(false);
  };

  const handleReset = () => {
    setCurrentCard(0);
    setStudiedCards([]);
    setShowAnswer(false);
  };

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Adaptive Learning',
      description: 'AI analyzes your progress and adjusts difficulty automatically',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Target,
      title: 'Personalized Content',
      description: 'Custom flashcards based on your learning patterns and weaknesses',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Smart Scheduling',
      description: 'Optimal review timing based on spaced repetition algorithms',
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI-Powered Learning Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage artificial intelligence to personalize your learning experience with smart flashcards and adaptive content
          </p>
        </div>
      </div>

      {/* AI Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Flashcard Tool */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Controls */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 text-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div>
                <h2 className="text-2xl font-bold mb-2">Smart Flashcards</h2>
                <p className="opacity-90">AI-powered spaced repetition system</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleReset}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-lg transition-all duration-200"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm opacity-90">
                  Card {currentCard + 1} of {flashcards.length}
                </span>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">{Math.round(progress)}% Complete</span>
                </div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Flashcard */}
          <div className="p-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 min-h-[300px] flex flex-col justify-center">
              <div className="text-center">
                {!showAnswer ? (
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                      {flashcards[currentCard].question}
                    </h3>
                    <button
                      onClick={handleCardFlip}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Reveal Answer
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Answer:</h3>
                    <div className="text-gray-800 whitespace-pre-line text-left">
                      {flashcards[currentCard].answer}
                    </div>
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={handleCardFlip}
                        className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
                      >
                        Show Question
                      </button>
                      <button
                        onClick={handleNext}
                        className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                      >
                        <span>Next Card</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Study Progress */}
          <div className="bg-gray-50 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">
                  Studied: {studiedCards.length} / {flashcards.length} cards
                </span>
              </div>
              {studiedCards.length === flashcards.length && (
                <div className="flex items-center space-x-2 text-green-600">
                  <Star className="w-5 h-5" />
                  <span className="font-semibold">Deck Complete!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITools;