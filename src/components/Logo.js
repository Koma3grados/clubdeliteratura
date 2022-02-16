import React from "react";
import ImgLogo from "../assets/Logo.png";
const Logo = (props) => {
  return (
    <div className="logo">
      <img src={ImgLogo} width="100%" alt="img" />
    </div>
  );
};

export default Logo;
