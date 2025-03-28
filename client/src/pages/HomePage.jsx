import { useState } from "react";
import { HomeHeader } from "../components/HomeHeader";
import { ArticleCard } from "../components/ArticleCard";

export const HomePage = () => {
  const [placeArray, setPlaceArray] = useState([]); // State for placeArray

  return (
    <div>
      <HomeHeader setPlaceArray={setPlaceArray} /> {/* Pass setPlaceArray as prop */}
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
          />
        ))}
      </div>
    </div>
  );
};
