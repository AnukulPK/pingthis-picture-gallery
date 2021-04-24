import React from "react";
import "./headerImage.css";

function headerImage() {
  return (
    <div className="header-image">
      <img
        src="https://images.pexels.com/photos/1534925/pexels-photo-1534925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="header-main"
        className="main-image"
      />
    </div>
  );
}

export default headerImage;
