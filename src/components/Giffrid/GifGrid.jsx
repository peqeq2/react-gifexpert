import './GifGrid.css';
import { GifItem } from "../Gifitem/GifItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { useState } from "react";

export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs( category);
  const [showGifs, setShowGifs] = useState(true);

  const handleDeleteGifs = () => {
    setShowGifs(false);
  };

  return (
    <div className="section mt-2 mb-3">
      {showGifs && (
        <>
          <h3>{category}</h3>
          {isLoading && <h2 className="loading">Loading...</h2>}
          <div className="card-grid mt-2 mb-2">
            {images.map((image) => (
              <GifItem key={image.id} {...image} />
            ))}
          </div>
          <button className="btn-delete" onClick={handleDeleteGifs}>Delete GIFs</button>
        </>
      )}
    </div>
  )
}
