import React from "react";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        title="Facebook"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2F%3F_rdc%3D1%26_rdr&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=160185687903996"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        // allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widgets;
