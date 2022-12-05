import React from "react";
import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  const [active, setActive] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Course",
      path: "/course",
    },
    {
      name: "News",
      path: "/news",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const activeToggle = () => {
    setActive((prev) => !prev);
    if (active) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className={"w-[100%] bg-[#20283f] h-[10vh] px-[6rem]  transition-all header"}>
          <div className="w-[100%] h-[100%] flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-[#fff] ">.logo</h1>
                         </div>
                            <ul className={ active ? " flex w-[30%] justify-between links active" : " flex w-[30%] justify-between links "} >
                              {links.map((item, i) => {
                                     return (
                                          <li key={i}>
                                              <Link to={item.path} onClick={active ? activeToggle : null}>
                                                   {item.name}
                                              </Link>
                                             </li>
                                          );
                                      })}
                                 </ul>
                              <div className="burger" onClick={activeToggle}>
                           <div className="item_bugger"></div>
                        <div className="item_bugger"></div>
                    <div className="item_bugger"></div>
              </div>
          </div>
    </div>
  );
}

export default Header;
