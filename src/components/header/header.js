import React from "react";
import "./header.css";

function header() {
  return (
    <div className="header">
      <img
        src="https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="logo"
        className="logo"
      />
      <h2>PING THIS - PHOTO GALLERY</h2>
    </div>
  );
}

export default header;
