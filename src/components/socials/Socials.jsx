import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Socials({ containerStyle, iconStyle }) {
  const links = [
    {
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/mahmoud-desoki-b60082234/",
    },
    {
      icon: <FaGithub />,
      path: "https://github.com/mahmoudmagdy198",
    },
  ];
  return (
    <>
      <div className={containerStyle}>
        {links.map((link, index) => (
          <Link
            target="_blank"
            key={index}
            to={link.path}
            className={iconStyle}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Socials;
