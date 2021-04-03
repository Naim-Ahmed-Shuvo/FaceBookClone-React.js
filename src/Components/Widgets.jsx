import React from "react";
import "../Css/Widgets.css";
const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        width="300"
        height="315"
        src="https://www.youtube.com/embed/Wl1LrBX7emI"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{border:"none",overflow:"hidden"}}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        
      ></iframe>
    </div>
  );
};

export default Widgets;
