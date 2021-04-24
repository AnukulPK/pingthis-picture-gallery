import React from "react";
import "./image.css";

function Image({ images, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {images.map((image) => {
        return (
          <img
            key={image.id}
            src={image.download_url}
            className="individual-image"
          />
        );
      })}
    </div>
  );
}

export default Image;
