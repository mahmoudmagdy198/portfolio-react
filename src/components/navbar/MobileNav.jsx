import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { FaAlignJustify } from "react-icons/fa6";

function MobileNav() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
        name: "Contact",
        path: "/contact",
      },
  ];
  let currentPath = useLocation();
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <FaAlignJustify className="text-[32px] text-blue-500" />
        </SheetTrigger>
        <SheetContent>
          {/* logo*/}
          <div className="text-center mt-32 mb-40">
            <Link to={"/"}>
              <h1 className="text-2xl font-mono font-bold">
                Mahmoud<span className="text-blue-500">Desoki</span>
              </h1>
            </Link>
          </div>
          {/*links */}
          <div className="flex justify-center items-center flex-col gap-8">
            {links.map((e, index) => (
              <Link
                to={e.path}
                key={index}
                className={`${
                  currentPath.pathname === e.path &&
                  "text-blue-500 border-b-2 border-blue-500"
                } hover:text-blue-400 transition-all font-medium`}
              >
                {e.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileNav;
