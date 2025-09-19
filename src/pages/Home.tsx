// import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight, BookOpen, Gamepad2, Sparkles, TrendingUp } from 'lucide-react';

const Home = () => {
  // Tự động scroll xuống cuối nếu có query scroll=features
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('scroll') === 'features') {
      const el = document.getElementById('features-end');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  // Tự động scroll xuống cuối nếu có query scroll=features
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('scroll') === 'features') {
      const el = document.getElementById('features-end');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  const features = [
    {
      icon: BookOpen,
      title: 'Kho Lý Thuyết',
      description: 'Tài liệu học tập đầy đủ với đồ họa tương tác',
      link: '/theory',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Gamepad2,
      title: 'Học Tương Tác',
      description: 'Câu hỏi trắc nghiệm và hoạt động thực hành giúp kiểm tra kiến thức',
      link: '/interactive',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Sparkles,
      title: 'Công Cụ AI',
      description: 'Thẻ ghi nhớ thông minh và đề xuất học tập cá nhân hóa',
      link: '/ai-tools',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Cập Nhật Thực Tiễn',
      description: 'Luôn cập nhật xu hướng và tin tức mới nhất trong ngành',
      link: '/real-world-updates',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <>
      {/* Hero Section - Đặt vấn đề */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-yellow-500 to-red-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent tracking-tight" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', lineHeight: '1.4' }}>
              Đảng cầm quyền có thể mất lòng tin của nhân dân – làm sao để tránh nguy cơ này?
            </h1>
            <p className="text-base md:text-lg mb-6 text-yellow-100 max-w-2xl mx-auto italic font-medium" style={{ lineHeight: '1.4' }}>
              Hồ Chí Minh từng nhấn mạnh: <span className="font-semibold">“Đảng là đạo đức, là văn minh”</span>. Nhưng Người cũng cảnh báo: nếu Đảng cầm quyền sa vào bệnh quan liêu, tham nhũng, xa dân thì “nguy cơ mất lòng tin của nhân dân là hiện hữu”.<br/>
              Niềm tin của nhân dân chính là nguồn sức mạnh to lớn, là chỗ dựa vững chắc để Đảng tồn tại, phát triển và lãnh đạo đất nước. Vì vậy, việc giữ gìn và củng cố lòng tin này không chỉ là yêu cầu chính trị, mà còn là vấn đề sống còn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                  to="/theory"
                  className="bg-white text-red-700 px-6 py-3 rounded-full font-semibold hover:bg-yellow-50 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base md:text-lg"
                >
                  <span>Khám phá →</span>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Niềm tin nhân dân – Nền tảng của sự lãnh đạo */}
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">Niềm tin nhân dân – Nền tảng của sự lãnh đạo</h2>
          <p className="text-lg text-gray-700 mb-8">Tư tưởng Hồ Chí Minh: <span className="font-semibold text-red-700">“Dân là gốc”</span>. Người khẳng định: “Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân”.<br/>Niềm tin của nhân dân đối với Đảng được hình thành từ:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <BookOpen className="w-10 h-10 text-blue-600 mb-3" />
              <div className="font-bold text-lg text-gray-800 mb-2">Đường lối đúng đắn</div>
              <div className="text-gray-600 text-base">Phục vụ lợi ích dân tộc, nhân dân.</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 mb-3 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div className="font-bold text-lg text-gray-800 mb-2">Cán bộ, đảng viên gương mẫu, trong sạch</div>
              <div className="text-gray-600 text-base">Gương mẫu, liêm khiết, tận tụy phục vụ nhân dân.</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 mb-3 bg-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div className="font-bold text-lg text-gray-800 mb-2">Gần gũi, gắn bó mật thiết với nhân dân</div>
              <div className="text-gray-600 text-base">Luôn lắng nghe, thấu hiểu và đồng hành cùng nhân dân.</div>
            </div>
          </div>
          <p className="text-base text-gray-600 mt-8">Nếu thiếu một trong những yếu tố này, niềm tin sẽ bị suy giảm.</p>
        </div>
      </section>

      {/* Ba nguy cơ lớn */}
      <section className="py-16 bg-gradient-to-b from-red-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-8 text-center">Ba nguy cơ lớn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card: Quan liêu */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-red-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-red-700 mb-4">Quan liêu</h3>
              <p className="text-gray-700 mb-4">Xa dân, không lắng nghe ý kiến của dân, làm việc theo lối hành chính, máy móc.</p>
            </div>
            {/* Card: Tham nhũng */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-red-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-red-700 mb-4">Tham nhũng</h3>
              <p className="text-gray-700 mb-4">Lợi dụng chức vụ, quyền hạn để vụ lợi cá nhân, làm giàu bất chính.</p>
            </div>
            {/* Card: Xa rời quần chúng */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-red-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-red-700 mb-4">Xa rời quần chúng</h3>
              <p className="text-gray-700 mb-4">Không sống, làm việc và chiến đấu vì dân sẽ bị dân quay lưng.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Kết luận & Bài học rút ra */}
      <section className="py-16 bg-gradient-to-b from-yellow-200 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-yellow-400 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">Kết luận & Bài học rút ra</h2>
            <p className="text-lg text-gray-800 mb-6">
              Ví dụ từ Nepal cho thấy những lời cảnh báo của Chủ tịch Hồ Chí Minh không chỉ là lý luận mà là một quy luật thực tiễn khắc nghiệt. Một Đảng cầm quyền, nếu không giữ được sự trong sạch, không thực sự vì dân, sa vào đấu đá quyền lực và tham nhũng, thì sớm hay muộn cũng sẽ phải đối mặt với sự quay lưng của chính người dân đã trao cho họ quyền lực.<br/><br/>
              <span className="font-semibold text-red-700">“Quyền lực phải đi đôi với trách nhiệm”</span><br/>
              Trách nhiệm lớn nhất là lắng nghe và phục vụ nhân dân. Mọi biểu hiện của sự quan liêu, xa dân, đặt lợi ích nhóm lên trên hết đều là con đường ngắn nhất dẫn đến sự suy yếu và khủng hoảng, làm mất đi thành quả cách mạng mà chính nhân dân đã hy sinh xương máu để giành được.
            </p>
            <Link
              to="/interactive"
              className="bg-yellow-400 text-red-700 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              <span>Thử Quiz →</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Section - Các phần tương tác */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">Phần Tương tác</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quiz nhanh */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200 flex flex-col items-center">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Quiz chủ đề</h3>
              <Link
                to="/interactive"
                className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Xem chi tiết</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Chatbot mini */}

            {/* <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200 flex flex-col items-center">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Chatbot mini</h3>
              <div className="w-full h-40 bg-blue-50 rounded-lg p-4 mb-4 flex flex-col justify-end">
                <div className="mb-2 text-gray-700 text-left"><span className="font-semibold">Bạn:</span> Làm sao để Đảng giữ được niềm tin của nhân dân?</div>
                <div className="mb-2 text-blue-700 text-left"><span className="font-semibold">Chatbot:</span> Đường lối đúng đắn, cán bộ trong sạch, gắn bó mật thiết với nhân dân.</div>
                <div className="mb-2 text-gray-700 text-left"><span className="font-semibold">Bạn:</span> Quan liêu, tham nhũng gây ra hậu quả gì?</div>
                <div className="mb-2 text-blue-700 text-left"><span className="font-semibold">Chatbot:</span> Làm mất lòng tin của nhân dân, dẫn đến bất ổn và suy yếu Đảng.</div>
              </div>
              <input type="text" className="w-full px-4 py-2 rounded-lg border border-blue-200" placeholder="Nhập câu hỏi..." disabled />
            </div> */}

            {/* Flashcard AI */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200 flex flex-col items-center">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Flashcard AI</h3>
              <div className="w-full grid grid-cols-1 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-left">
                  <div className="font-semibold text-blue-700 mb-2">Định nghĩa: Quan liêu</div>
                  <div className="text-gray-700">Căn bệnh xa dân, không lắng nghe ý kiến của dân, làm việc theo lối hành chính, máy móc.</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-left">
                  <div className="font-semibold text-blue-700 mb-2">Ví dụ: Tham nhũng</div>
                  <div className="text-gray-700">Lợi dụng chức vụ, quyền hạn để vụ lợi cá nhân, làm giàu bất chính.</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-left">
                  <div className="font-semibold text-blue-700 mb-2">Bài học: Xa rời quần chúng</div>
                  <div className="text-gray-700">Không sống, làm việc và chiến đấu vì dân sẽ bị dân quay lưng.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Khám phá Flashcard AI
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Học nhanh – Nhớ lâu – Trải nghiệm ngay
          </p>
          <Link
            to="/ai-tools"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Sparkles className="w-5 h-5" />
            <span>Trải nghiệm Flashcard AI</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

  {/* Features Section - Đặt ở ngoài cùng cuối cùng */}
  <section id="features-end" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lý luận sâu sắc – Thực tiễn sinh động
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá tư tưởng Hồ Chí Minh qua học liệu trực quan, công cụ AI và ví dụ thực tế.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                // <Link
                //   key={index}
                //   to={feature.title === 'Kho Lý Thuyết' ? feature.link : feature.title === 'Cập Nhật Thực Tiễn' ? feature.link + '?scroll=features' : feature.link}
                //   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                // >
                //   <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200`}>
                //     <Icon className="w-7 h-7 text-white" />
                //   </div>
                //   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                //     {feature.title}
                //   </h3>
                //   <p className="text-gray-600 mb-4">
                //     {feature.description}
                //   </p>
                //   <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                //     <span>Explore</span>
                //     <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                //   </div>
                // </Link>
                <Link
                key={index}
                to={feature.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>

              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;