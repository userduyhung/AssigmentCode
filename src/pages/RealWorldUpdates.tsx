import { useEffect } from 'react';
import { Globe, Calendar, TrendingUp, ExternalLink, Clock, Tag, ArrowRight } from 'lucide-react';

const RealWorldUpdates = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  // Đã loại bỏ chức năng lọc danh mục

  const newsItems = [
    {
      id: 1,
      title: "Tiếp tục cuộc đấu tranh phòng, chống tham nhũng, lãng phí, tiêu cực ... cũng có niềm tin của nhân dân",
      excerpt: "Nhấn mạnh vai trò nhân dân trong phát hiện, đấu tranh tham nhũng; 'ý Đảng hòa quyện với lòng dân', minh bạch, trách nhiệm công quyền.",
      category: "Tạp chí Cộng sản",
      date: "2025-09-01",
      readTime: "3 phút",
      image: "https://www.tapchicongsan.org.vn/image/journal/article?img_id=484961806&t=1745470720616",
      trending: true,
      url: "https://www.tapchicongsan.org.vn/media-story/-/asset_publisher/V8hhp4dK31Gf/content/tiep-tuc-cuoc-dau-tranh-phong-chong-tham-nhung-lang-phi-tieu-cuc-nhan-to-cot-loi-bao-dam-thanh-cong-trong-ky-nguyen-vuon-minh-cua-dan-toc"
    },
    {
      id: 2,
      title: "Củng cố và tăng cường mối quan hệ mật thiết giữa Đảng với nhân dân theo tinh thần Đại hội XIII",
      excerpt: "Liệt kê những việc Đảng các cấp đã làm: lắng nghe nguyện vọng, tiếp công dân, giải quyết khiếu nại tố cáo, dân vận.",
      category: "Tạp chí Cộng sản",
      date: "2025-08-28",
      readTime: "4 phút",
      image: "https://www.tapchicongsan.org.vn/documents/20182/258924458/vna_potal_tong_bi_thu_nguyen_phu_trong_tham_lam_viec_tai_hoa_binh_102617920_2050401.jpg/8251cd6e-2ddd-451c-b23b-9a2fc32f9f93?t=1678549437631",
      url: "https://www.tapchicongsan.org.vn/web/guest/chinh-tri-xay-dung-dang/-/2018/827147/cung-co-va-tang-cuong-moi-quan-he-mat-thiet-giua-dang-voi-nhan-dan-theo-tinh-than-dai-hoi-xiii-cua-dang.aspx"
    },
    {
      id: 3,
      title: "Nhận diện, đấu tranh với thủ đoạn chia rẽ 'ý Đảng với lòng dân'",
      excerpt: "Bài mới cảnh báo về những thủ đoạn làm giảm niềm tin: chia rẽ, xuyên tạc giữa Đảng và dân, gây hoài nghi.",
      category: "Quân Đội Nhân Dân",
      date: "2025-08-20",
      readTime: "3 phút",
      image: "https://file3.qdnd.vn/data/images/0/2025/09/17/upload_2049/dang.jpg?dpi=150&quality=100&w=870",
      url: "https://www.qdnd.vn/phong-chong-dien-bien-hoa-binh/nhan-dien-dau-tranh-voi-thu-doan-chia-re-y-dang-voi-long-dan-dua-dat-nuoc-vuon-minh-vao-ky-nguyen-moi-846556"
    },
    {
      id: 4,
      title: "Thực hiện tốt nguyên tắc Đảng gắn bó mật thiết với nhân dân",
      excerpt: "Nhấn mạnh cán bộ, lãnh đạo phải thường xuyên xuống cơ sở, trao đổi / học hỏi từ dân; minh chứng cho sự gắn bó thực tế.",
      category: "BaoQuangBinh",
      date: "2025-08-15",
      readTime: "4 phút",
      image: "https://baoquangbinh.vn/dataimages/202403/original/images777244_7.jpg",
      url: "https://baoquangbinh.vn/chinh-tri/202403/thuc-hien-tot-nguyen-tac-dang-gan-bo-mat-thiet-voi-nhan-dan-2216410/"
    },
    {
      id: 5,
      title: "Đấu tranh phòng, chống tham nhũng, tiêu cực: Một việc làm tất yếu — xu thế không thể đảo ngược",
      excerpt: "Bài trình bày quan điểm: tiêu cực + tham nhũng không chỉ về tiền, mà về đạo đức, lối sống; nêu vai trò quan trọng của việc xử lý cả về tư tưởng.",
      category: "Nhân Dân Special",
      date: "2025-08-10",
      readTime: "5 phút",
      image: "https://special.nhandan.vn/dau-tranh-phong-chong-tham-nhung-tieu-cuc-mot-viec-lam-tat-yeu-mot-xu-the-khong-the-dao-nguoc/assets/Ahi96JaiJq/anh-1-dsc_1938-1980x1267.jpg",
      url: "https://special.nhandan.vn/dau-tranh-phong-chong-tham-nhung-tieu-cuc-mot-viec-lam-tat-yeu-mot-xu-the-khong-the-dao-nguoc/index.html"
    },
    {
      id: 6,
      title: "Củng cố niềm tin của Nhân dân từ hiệu quả công tác đấu tranh phòng chống tham nhũng",
      excerpt: "Bài viết chỉ rõ hiệu quả của các hoạt động thực tế chống tham nhũng – cả ở trung ương và địa phương – và mối liên hệ tới niềm tin của dân.",
      category: "Tuyên Quang DCS",
      date: "2025-08-05",
      readTime: "4 phút",
      image: "https://tuyenquang.dcs.vn/images/072348cc-0911-4cdb-95e3-b073480a0daf.jpg",
      url: "https://tuyenquang.dcs.vn/DetailView/146257/38/Cung-co-niem-tin-cua-Nhan-dan-tu-hieu-qua-cong-tac-dau-tranh-phong-chong-tham-nhung.html"
    }
  ];

  // Đã loại bỏ mảng categories và filteredNews

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cập nhật từ thế giới thực
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Các ví dụ, bài viết, nguồn tin thực tiễn liên quan đến chủ đề niềm tin chính trị, phòng chống tham nhũng, gắn bó với nhân dân
          </p>
        </div>
      </div>

      {/* ...đã loại bỏ phần lọc danh mục... */}

      {/* Trending News */}
  {/* Xu hướng hiện nay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-gray-900">Xu hướng hiện nay</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {newsItems.filter(item => item.trending).map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>Đang xu hướng</span>
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(item.date)}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 font-semibold hover:text-orange-700 flex items-center space-x-1 transition-colors duration-200"
                    >
                      <span>Đọc thêm</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      className="text-orange-400 bg-gray-100 cursor-not-allowed flex items-center space-x-1 px-3 py-1 rounded"
                      disabled
                      title="Chưa có link bài viết"
                    >
                      <span>Đọc thêm</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      

      {/* All News */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-6">
          <Globe className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">
            {'Cập nhật mới nhất'}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                {item.trending && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500 text-white p-2 rounded-full">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full flex items-center space-x-1">
                    <Tag className="w-3 h-3" />
                    <span>{item.category}</span>
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(item.date)}
                  </div>
                  
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center space-x-1"
                    >
                      <span className="text-sm font-medium">Đọc toàn bộ bài viết</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      className="text-blue-400 bg-gray-100 cursor-not-allowed flex items-center space-x-1 px-3 py-1 rounded"
                      disabled
                      title="Chưa có link bài viết"
                    >
                      <span className="text-sm font-medium">Đọc toàn bộ bài viết</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

  {newsItems.length === 0 && (
          <div className="text-center py-12">
            <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Không tìm thấy bài viết</h3>
            <p className="text-gray-600">Hãy thử chọn một danh mục khác để xem thêm nội dung.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RealWorldUpdates;