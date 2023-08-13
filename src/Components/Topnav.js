import React from "react";
import icon from "../Images/instaimg2/icon/icon.png";
import camera from "../Images/instaimg2/camera.png";
import { Link}  from "react-router-dom";

function Topnav() {
  return (
    <>
      <nav>
        <div className="logo_bar">
          <div className="left">
            <img src={icon} alt="" />
          </div>
          <h3>Instaclone</h3>
        </div>
        <div className="right">
          <Link to="/newposts">
            <img src={camera} alt="" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Topnav;
