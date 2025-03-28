import { useState } from "react";
import { HomeHeader } from "../components/HomeHeader";
import { ArticleCard } from "../components/ArticleCard";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  const [placeArray, setPlaceArray] = useState([]); // State for placeArray
  const [textChange, setTextChange] = useState(""); // State for search input

  const handleTagClick = (tag) => {
    setTextChange((prev) => (prev ? `${prev} ${tag}` : tag));
  };

  return (
    <div className="bg-gray-50">
      <HomeHeader setPlaceArray={setPlaceArray} textChange={textChange} setTextChange={setTextChange} />
      <div className="container mx-auto px-4 py-8">
        {placeArray.map((place) => (
          <ArticleCard
            key={place.eid}
            article={{
              mainImage: place.photos[0], // First photo as main image
              title: place.title,
              snippet: place.description, // Map description to snippet
              link: place.url,
              tags: place.tags,
              subImages: place.photos.slice(1), // Remaining photos as subImages
            }}
            onTagClick={handleTagClick}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};
