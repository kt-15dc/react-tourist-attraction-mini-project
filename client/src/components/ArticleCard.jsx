import { useState } from "react";

export const ArticleCard = ({ article, onTagClick }) => {
  const [notification, setNotification] = useState("");

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setNotification("🔗 ลิงก์ถูกคัดลอกแล้ว!");
      setTimeout(() => setNotification(""), 3000);
    });
  };

  return (
    <div className="relative">
      {/* Notification Bar */}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-2 rounded shadow-md z-50">
          {notification}
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row gap-4 p-4 mb-6">
        {/* Main Image */}
        <div className="w-full md:w-60 h-40 md:h-auto">
          <img
            src={article.mainImage}
            alt={article.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="mb-3">
            <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {article.snippet.slice(0, 100)}{article.snippet.length > 100 ? "..." : ""}
            </p>
            <a
              href={article.link}
              target="_blank"
              className="text-amber-600 text-sm font-medium hover:underline mt-1 inline-block"
            >
              อ่านต่อ →
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-sm mb-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                onClick={() => onTagClick(tag)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full cursor-pointer transition"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Sub Images */}
          {article.subImages && article.subImages.length > 0 && (
            <div className="flex gap-2 mt-2">
              {article.subImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`sub-${index}`}
                  className="w-16 h-16 object-cover rounded-lg border"
                />
              ))}
            </div>
          )}
        </div>

        {/* Copy Link Icon */}
        <div className="hidden md:flex items-start justify-end">
          <button
            onClick={() => handleCopyLink(article.link)}
            className="text-gray-400 hover:text-blue-500 transition"
            title="คัดลอกลิงก์"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 3h7v7m0 0L10 21l-7-7L17 3z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
