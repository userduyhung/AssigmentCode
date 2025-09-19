import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Trophy, Gamepad2, Star } from 'lucide-react';

const quizData = [
  {
    question: 'Theo tư tưởng Hồ Chí Minh, yếu tố nào được coi là "gốc" và là nền tảng vững chắc nhất cho sự tồn tại và lãnh đạo của Đảng cầm quyền?',
    options: [
      'A. Sức mạnh quân sự và quốc phòng.',
      'B. Sự ủng hộ của các đồng minh quốc tế.',
      'C. Nền tảng kinh tế vững mạnh.',
      'D. Niềm tin và sự đoàn kết của nhân dân.'
    ],
    answer: 3,
    explanation: '"Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân". "Dân là gốc" và niềm tin của nhân dân là chỗ dựa vững chắc để Đảng tồn tại.'
  },
  {
    question: 'Sinh thời, Chủ tịch Hồ Chí Minh đã chỉ ra ba nguy cơ lớn nhất có thể dẫn đến sự suy thoái, biến chất của một Đảng cầm quyền là gì?',
    options: [
      'A. Đấu đá phe phái, chủ nghĩa cá nhân và kinh tế chậm phát triển.',
      'B. Quan liêu, tham nhũng và xa rời quần chúng.',
      'C. Sự can thiệp từ bên ngoài, khủng hoảng kinh tế và thiên tai.',
      'D. Tụt hậu về công nghệ, thiếu cán bộ kế cận và mâu thuẫn xã hội.'
    ],
    answer: 1,
    explanation: '"Quan liêu... Tham nhũng... Xa rời quần chúng" là những "căn bệnh" có thể làm Đảng mất đi lòng tin của dân.'
  },
  {
    question: 'Chủ tịch Hồ Chí Minh đã ví tham nhũng với hình ảnh nào để nhấn mạnh mức độ nguy hiểm của nó đối với Đảng và chế độ?',
    options: [
      'A. "Một căn bệnh mãn tính khó chữa".',
      'B. "Kẻ thù nội xâm".',
      'C. "Một tảng băng chìm".',
      'D. "Con sâu làm rầu nồi canh".'
    ],
    answer: 1,
    explanation: '"Bác Hồ coi tham nhũng là kẻ thù nội xâm, là giặc ở trong lòng".'
  },
  {
    question: 'Thực tiễn đấu đá, tranh giành ảnh hưởng trong nội bộ Đảng Cộng sản cầm quyền ở Nepal đã đi ngược lại nguyên tắc cốt lõi nào trong tư tưởng Hồ Chí Minh về xây dựng Đảng?',
    options: [
      'A. Nguyên tắc tập trung dân chủ.',
      'B. Nguyên tắc "dân là gốc".',
      'C. Nguyên tắc "đoàn kết, thống nhất trong Đảng".',
      'D. Nguyên tắc tự phê bình và phê bình.'
    ],
    answer: 2,
    explanation: 'Điều này đi ngược lại với nguyên tắc "đoàn kết, thống nhất trong Đảng".'
  },
  {
    question: 'Hậu quả trực tiếp của việc Đảng cầm quyền ở Nepal sa vào quan liêu, tham nhũng và đấu đá nội bộ, dẫn đến mất lòng tin của nhân dân là gì?',
    options: [
      'A. Kinh tế phát triển vượt bậc nhờ sự can thiệp của quốc tế.',
      'B. Chế độ quân chủ được phục hồi.',
      'C. Bất ổn chính trị kéo dài và sự trỗi dậy của các đảng phái mới.',
      'D. Các đảng truyền thống củng cố được vị thế và đoàn kết hơn.'
    ],
    answer: 2,
    explanation: 'Sự bất ổn chính trị kéo dài và các đảng truyền thống mất dần sự ủng hộ vào tay các đảng phái và cá nhân mới nổi.'
  },
  {
    question: 'Theo Chủ tịch Hồ Chí Minh, khi một Đảng cầm quyền "cách xa dân chúng", điều gì sẽ là mất mát lớn nhất và quyết định sự thất bại của Đảng?',
    options: [
      'A. Mất quyền kiểm soát nền kinh tế.',
      'B. Mất sự ủng hộ của quốc tế.',
      'C. Mất đoàn kết trong nội bộ Đảng.',
      'D. Mất lòng tin của nhân dân.'
    ],
    answer: 3,
    explanation: '“cách xa dân chúng, không liên hệ chặt chẽ với dân chúng... nhất định thất bại. Mất lòng tin là mất tất cả”.'
  },
  {
    question: 'Ví dụ từ cuộc khủng hoảng chính trị ở Nepal đã chứng minh những lời cảnh báo của Chủ tịch Hồ Chí Minh không chỉ là lý luận mà còn là gì?',
    options: [
      'A. Một dự báo chính trị mang tính thời điểm.',
      'B. Một kinh nghiệm chỉ đúng với bối cảnh Việt Nam.',
      'C. Một giả thuyết cần thêm thời gian kiểm chứng.',
      'D. Một quy luật thực tiễn khắc nghiệt.'
    ],
    answer: 3,
    explanation: 'Ví dụ từ Nepal cho thấy một cách sống động rằng những lời cảnh báo của Chủ tịch Hồ Chí Minh không chỉ là lý luận mà là một quy luật thực tiễn khắc nghiệt.'
  },
  {
    question: 'Theo tài liệu, việc phân tích các ví dụ quốc tế như Nepal có ý nghĩa gì đối với sinh viên Việt Nam?',
    options: [
      'A. Tìm kiếm các mô hình chính trị mới để thay thế mô hình hiện tại.',
      'B. Nhận thức rõ hơn trách nhiệm xây dựng một Đảng "là đạo đức, là văn minh".',
      'C. Tăng cường giao lưu, học hỏi kinh nghiệm phát triển kinh tế của Nepal.',
      'D. Chỉ trích các thất bại của hệ thống chính trị các nước khác.'
    ],
    answer: 1,
    explanation: '...nhận thức rõ hơn trách nhiệm của Đảng và của thế hệ trẻ trong việc xây dựng một Đảng thực sự "là đạo đức, là văn minh", gắn bó máu thịt với nhân dân.'
  }
];

const Interactive = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === quizData[currentQuiz].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuiz < quizData.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage >= 80) return 'from-green-500 to-emerald-600';
    if (percentage >= 60) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-pink-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage >= 80) return 'Excellent work! 🎉';
    if (percentage >= 60) return 'Good job! Keep learning! 👍';
    return 'Keep practicing! You\'ll improve! 💪';
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen py-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${getScoreColor()} rounded-full mb-6`}>
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Quiz Completed!</h1>
            <p className="text-xl text-gray-600 mb-6">{getScoreMessage()}</p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {score} / {quizData.length}
              </div>
              <div className="text-lg text-gray-600">
                {Math.round((score / quizData.length) * 100)}% Correct
              </div>
            </div>
            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Try Again</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mb-6">
            <Gamepad2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Learning
          </h1>
          <p className="text-xl text-gray-600">
            Test your knowledge and learn through engaging quizzes
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-700">
              Question {currentQuiz + 1} of {quizData.length}
            </span>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-gray-700">Score: {score}</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-green-500 to-teal-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuiz + 1) / quizData.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quiz Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
            {quizData[currentQuiz].question}
          </h2>

          <div className="space-y-4 mb-8">
            {quizData[currentQuiz].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? showResult
                      ? index === quizData[currentQuiz].answer
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-red-500 bg-red-50 text-red-800'
                      : 'border-blue-500 bg-blue-50 text-blue-800'
                    : showResult && index === quizData[currentQuiz].answer
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showResult && (
                    <div className="flex items-center">
                      {index === quizData[currentQuiz].answer ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : selectedAnswer === index ? (
                        <XCircle className="w-6 h-6 text-red-600" />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {showResult && (
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {selectedAnswer === quizData[currentQuiz].answer ? (
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600 mt-0.5" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {selectedAnswer === quizData[currentQuiz].answer ? 'Correct!' : 'Not quite right'}
                  </h3>
                  <p className="text-gray-600">{quizData[currentQuiz].explanation}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center space-x-4">
            {!showResult ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedAnswer !== null
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {currentQuiz < quizData.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interactive;