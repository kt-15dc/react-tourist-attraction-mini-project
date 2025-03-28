export const ArticleCard = ({ article }) => {
    return (
      <div className="flex flex-col md:flex-row gap-4 py-6 border-b">
        {/* Main Image */}
        <img src={article.mainImage} alt={article.title} className="w-full md:w-60 h-40 object-cover rounded-xl" />
  
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-1">{article.title}</h2>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{article.snippet}</p>
            <a href={article.link} className="text-blue-500 text-sm hover:underline">อ่านต่อ</a>
          </div>
  
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {article.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">{tag}</span>
            ))}
          </div>
  
          {/* Sub Images */}
          <div className="flex gap-2 mt-2">
            {article.subImages.map((img, index) => (
              <img key={index} src={img} className="w-16 h-16 object-cover rounded-md" />
            ))}
          </div>
        </div>
  
        {/* External Link Icon */}
        <div className="hidden md:flex items-start justify-end w-8">
          <a href={article.link}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0 0L10 21l-7-7L17 3z" />
            </svg>
          </a>
        </div>
      </div>
    );
  };
  