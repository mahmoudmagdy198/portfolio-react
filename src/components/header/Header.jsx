import React from "react";
import { Link } from "react-router-dom";
import Nav from "../navbar/Nav";
import { Button } from "../ui/button";
import MobileNav from "../navbar/MobileNav";

function Header() {
  return (
    <>
      <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <Link to={"/"}>
            <h1 className="text-4xl font-mono font-bold">
              Mahmoud<span className="text-blue-500">Desoki</span>
            </h1>
          </Link>

          {/*desktop */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link to={"/contact"}>
              <Button variant="contact">Contact us</Button>
            </Link>
          </div>

          {/*mobile */}
          <div className="xl:hidden">
            <MobileNav/>
          </div>
        </div>
      </header>
      
    </>
  );
}

export default Header;
