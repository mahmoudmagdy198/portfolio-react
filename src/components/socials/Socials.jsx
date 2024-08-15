import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Socials({ containerStyle, iconStyle }) {
  const links = [
    {
      icon: <FaLinkedinIn />,
      path: "",
    },
    {
      icon: <FaGithub />,
      path: "",
    },
  ];
  return (
    <>
      <div className={containerStyle}>
        {links.map((link, index) => (
          <Link key={index} to={link.path} className={iconStyle}>
            {link.icon}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Socials;
