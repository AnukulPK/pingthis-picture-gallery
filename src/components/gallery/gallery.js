import React, { useState, useEffect } from "react";
import Image from "../image/image";
import Pagination from "../pagination/pagination";
import axios from "axios";
import "./gallery.css";

function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(6);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const res = await axios.get("https://picsum.photos/v2/list");
      setGalleryImages(res.data);
      setLoading(false);
    };

    fetchImages();
  }, []);

  //Getting Current set of images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImage = galleryImages.slice(indexOfFirstImage, indexOfLastImage);

  //Function to control changing of pages for pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="gallery-container">
        <Image images={currentImage} loading={loading} />
      </div>
      <div className="pagination-container">
        <Pagination
          imagesPerPage={imagesPerPage}
          totalImages={galleryImages.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default Gallery;
