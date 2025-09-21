

import React, { useState } from "react";
// import { useEffect } from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};
const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200 ${className}`}>{children}</div>
);

type QuoteProps = {
  children: React.ReactNode;
};
const Quote = ({ children }: QuoteProps) => (
  <blockquote className="italic text-blue-700 border-l-4 border-blue-400 pl-4 my-4">{children}</blockquote>
);

const Theory: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-800 tracking-tight">Chủ đề 03</h1>
      <h2 className="text-xl font-bold mb-2 text-center text-blue-600">Đảng cầm quyền có thể mất lòng tin của nhân dân – làm sao để tránh nguy cơ này?</h2>
      <div className="flex justify-center mb-8">
        <span className="inline-block w-24 h-1 bg-blue-300 rounded-full"></span>
      </div>
      <Card>
        <h3 className="text-lg font-semibold mb-2 text-blue-700">Đặt vấn đề</h3>
        <Quote>“Đảng là đạo đức, là văn minh”. Nhưng Người cũng cảnh báo: nếu Đảng cầm quyền sa vào bệnh quan liêu, tham nhũng, xa dân thì “nguy cơ mất lòng tin của nhân dân là hiện hữu”.</Quote>
        <p className="mb-2">Niềm tin của nhân dân chính là nguồn sức mạnh to lớn, là chỗ dựa vững chắc để Đảng tồn tại, phát triển và lãnh đạo đất nước. Vì vậy, việc giữ gìn và củng cố lòng tin này không chỉ là yêu cầu chính trị, mà còn là vấn đề sống còn.</p>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold mb-2 text-blue-700">Niềm tin nhân dân – nền tảng của sự lãnh đạo</h3>
        <ul className="list-disc pl-6 mb-2">
          <li><span className="font-medium">Trong Tư tưởng Hồ Chí Minh, dân là gốc.</span> Người khẳng định:</li>
        </ul>
        <Quote>“Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân”.</Quote>
        <ul className="list-decimal pl-6 mb-2">
          <li>Đường lối đúng đắn phục vụ lợi ích dân tộc, nhân dân.</li>
          <li>Đội ngũ cán bộ, đảng viên gương mẫu, trong sạch.</li>
          <li>Sự gần gũi, gắn bó mật thiết với nhân dân.</li>
        </ul>
        <p className="mb-2">Nếu thiếu một trong những yếu tố này, niềm tin sẽ bị suy giảm.</p>
      </Card>
      {/* Modal logic & data */}
      {/** Modal state and content */}
      {(() => {
        const [modalOpen, setModalOpen] = useState(false);
        const [modalContent, setModalContent] = useState<{title: string, detail: React.ReactNode} | null>(null);

        const details = [
          {
            title: "Quan liêu",
            short: "Căn bệnh xa dân, không lắng nghe ý kiến của dân.",
            detail: (
              <>
                <p className="mb-2">Quan liêu là làm việc theo lối hành chính, máy móc, mệnh lệnh, không xuất phát từ lợi ích của nhân dân.</p>
                <p className="mb-2">Quan liêu khiến cán bộ Đảng trở nên vô cảm, thiếu trách nhiệm, tạo ra khoảng cách lớn giữa Đảng và dân.</p>
              </>
            )
          },
          {
            title: "Tham nhũng",
            short: "Bác Hồ coi tham nhũng là 'kẻ thù nội xâm'.",
            detail: (
              <>
                <p className="mb-2">Tham nhũng làm xói mòn đạo đức, làm giàu bất chính trên mồ hãm của nhân dân, phá hoại niềm tin của dân vào sự công bằng, minh bạch của xã hội.</p>
                <Quote>“Cách xa dân chúng, không liên hệ chặt chẽ với dân chúng, cũng như đứng lơ lửng giữa trời, nhất định thất bại”. Mất lòng tin là mất tất cả. (Trích giáo trình page 136)</Quote>
              </>
            )
          },
          {
            title: "Xa rời quần chúng",
            short: "Không còn coi dân là gốc, không sống vì dân.",
            detail: (
              <>
                <p className="mb-2">Khi cán bộ Đảng không còn coi dân là gốc, không sống, làm việc và chiến đấu vì dân, thì tất yếu sẽ bị dân quay lưng.</p>
                <p className="mb-2">Lịch sử đã chứng minh, một Đảng không có sự ủng hộ của nhân dân thì không thể tồn tại và phát triển.</p>
              </>
            )
          }
        ];

        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {details.map((item, idx) => (
                <Card key={item.title} className={
                  idx === 0 ? "bg-orange-50 flex flex-col items-center text-center py-10 min-h-[220px]" :
                  idx === 1 ? "bg-yellow-50 flex flex-col items-center text-center py-10 min-h-[220px]" :
                  "bg-red-50 flex flex-col items-center text-center py-10 min-h-[220px]"
                }>
                  <div className="mb-4 flex items-center justify-center">
                    <span className={
                      idx === 0 ? "inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-300" :
                      idx === 1 ? "inline-flex items-center justify-center w-14 h-14 rounded-full bg-yellow-300" :
                      "inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-300"
                    }>
                      {/* icon */}
                      {idx === 0 && (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)}
                      {idx === 1 && (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>)}
                      {idx === 2 && (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414A9 9 0 105.636 18.364l1.414-1.414A7 7 0 1118.364 5.636z" /></svg>)}
                    </span>
                  </div>
                  <h4 className={
                    idx === 0 ? "font-bold text-orange-700 mb-2 text-xl" :
                    idx === 1 ? "font-bold text-yellow-700 mb-2 text-xl" :
                    "font-bold text-red-700 mb-2 text-xl"
                  }>{item.title}</h4>
                  <p className="text-base leading-relaxed mb-2">{item.short}</p>
                  <button
                    className="mt-3 px-4 py-2 rounded bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition"
                    onClick={() => {
                      setModalContent({ title: item.title, detail: item.detail });
                      setModalOpen(true);
                    }}
                  >Xem chi tiết</button>
                </Card>
              ))}
            </div>
            {/* Modal: click outside to close, larger size */}
            {modalOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
                onClick={e => {
                  if (e.target === e.currentTarget) setModalOpen(false);
                }}
              >
                <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-xl w-full relative text-center" onClick={e => e.stopPropagation()}>
                  <h3 className="text-2xl font-bold mb-5 text-blue-700">{modalContent?.title}</h3>
                  <div className="text-gray-700 text-base">{modalContent?.detail}</div>
                  <button
                    className="mt-8 px-5 py-2 rounded bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
                    onClick={() => setModalOpen(false)}
                  >Đóng</button>
                </div>
              </div>
            )}
          </>
        );
      })()}
      <Card>
        <h3 className="text-lg font-semibold mb-2 text-blue-700">Ví dụ Thực tiễn: Cuộc khủng hoảng chính trị ở Nepal và sự xói mòn niềm tin</h3>
        <p className="mb-2"><span className="font-bold">Bối cảnh:</span> Nepal đã có một lịch sử chính trị đầy biến động, chuyển từ chế độ quân chủ sang một nước cộng hòa dân chủ liên bang vào năm 2008. Đảng Cộng sản Nepal đã nhiều lần nắm quyền nhưng chính trường thường xuyên rơi vào khủng hoảng.</p>
        <div className="space-y-4 mt-4">
          <Card className="bg-gray-50">
            <h4 className="font-bold text-gray-700 mb-2">Mất đoàn kết nội bộ và đấu đá quyền lực</h4>
            <p className="text-sm">Các phe phái trong Đảng Cộng sản cầm quyền liên tục đấu đá, tranh giành ảnh hưởng và chức vụ, gây ra khủng hoảng nội các, giải tán quốc hội, bầu cử sớm. Điều này đi ngược lại với nguyên tắc "đoàn kết, thống nhất trong Đảng". Nhân dân nhìn vào sẽ thấy một tập thể lãnh đạo chia rẽ, chỉ lo tranh giành quyền lực thay vì giải quyết các vấn đề cấp bách của đất nước.</p>
          </Card>
          <Card className="bg-gray-50">
            <h4 className="font-bold text-gray-700 mb-2">Quan liêu, tham nhũng và xa rời nhân dân</h4>
            <p className="text-sm">Các chính phủ kế tiếp nhau ở Nepal đều đối mặt với những cáo buộc tham nhũng nghiêm trọng, từ việc xử lý viện trợ quốc tế sau động đất đến các bê bối mua sắm thiết bị y tế. Người dân cảm thấy lãnh đạo chỉ dùng quyền lực để làm giàu cho bản thân, trong khi đời sống không cải thiện.</p>
          </Card>
          <Card className="bg-gray-50">
            <h4 className="font-bold text-gray-700 mb-2">Hậu quả: Mất niềm tin và bất ổn chính trị kéo dài</h4>
            <p className="text-sm">Sự mất lòng tin của nhân dân thể hiện qua các cuộc biểu tình, sự thờ ơ chính trị và kết quả bầu cử, nơi các đảng truyền thống mất dần sự ủng hộ vào tay các đảng phái mới nổi. Sự bất ổn kéo dài khiến Nepal không thể thực hiện các cải cách kinh tế - xã hội quan trọng.</p>
            <Quote>“Dễ mười lần không dân cũng chịu, khó trăm lần dân liệu cũng xong”. Khi có được lòng tin của dân, Đảng có thể vượt qua mọi khó khăn. Nhưng khi đã đánh mất nó, dù nhiệm vụ dễ dàng đến đâu cũng không thể hoàn thành.</Quote>
          </Card>
        </div>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold mb-2 text-blue-700">Kết luận</h3>
        <p className="mb-2">Ví dụ từ Nepal cho thấy một cách sống động rằng những lời cảnh báo của Chủ tịch Hồ Chí Minh không chỉ là lý luận mà là một quy luật thực tiễn khắc nghiệt. Một Đảng cầm quyền, dù mang tên "Cộng sản" hay bất kỳ tên gọi nào khác, nếu không giữ được sự trong sạch, không thực sự vì dân, sa vào đấu đá quyền lực và tham nhũng, thì sớm hay muộn cũng sẽ phải đối mặt với sự quay lưng của chính người dân đã trao cho họ quyền lực.</p>
        <p className="mb-2">Đối với sinh viên Việt Nam, việc phân tích những ví dụ quốc tế như vậy là một cách rất tốt để hiểu sâu hơn giá trị của tư tưởng Hồ Chí Minh và nhận thức rõ hơn trách nhiệm của Đảng và của thế hệ trẻ trong việc xây dựng một Đảng thực sự "là đạo đức, là văn minh", gắn bó máu thịt với nhân dân.</p>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold mb-2 text-blue-700">Bài học rút ra</h3>
        <p className="mb-2">Bài học rút ra một lần nữa khẳng định tầm nhìn sâu sắc của Chủ tịch Hồ Chí Minh: Quyền lực phải đi đôi với trách nhiệm. Trách nhiệm lớn nhất là lắng nghe và phục vụ nhân dân. Mọi biểu hiện của sự quan liêu, xa dân, đặt lợi ích nhóm lên trên hết đều là con đường ngắn nhất dẫn đến sự suy yếu và khủng hoảng, làm mất đi thành quả cách mạng mà chính nhân dân đã hy sinh xương máu để giành được.</p>
      </Card>
    </div>
  );
};

export default Theory;