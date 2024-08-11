import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Resume",
            path: "/resume"
        },
        {
            name: "Projects",
            path: "/projects"
        }
    ]
    let currentPath = useLocation()
  return (
    <>
        <nav className="flex gap-8">
            {links.map((e , index) => (
                <Link to= {e.path} key={index} className={`${currentPath.pathname === e.path && "text-blue-500 border-b-2 border-blue-500"} hover:text-blue-400 transition-all font-medium`}>
                    {e.name}</Link>
            ))}

        </nav>
    
    
    </>
  )
}

export default Nav;
