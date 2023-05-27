import { Link, useLocation } from "react-router-dom";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const SideNavbar = () => {
  const activeLink = useLocation();
  const dataArr = JSON.parse(localStorage.getItem("userData"));

  const getIndicator = (path, color, marginTop) => {
    return activeLink.pathname === path && (
      <div style={{ marginTop }} className="indicator">
        
      </div>
    );
  };

  return (
    <nav className="p-8">
      <div className="bg-gradient-to-b from-indigo-500 to-purple-800 p-8 h-[45rem] rounded-3xl">
        <div className="text-left py-44 leading-[4rem] font-semibold">
          <ul>
            <li>
              <Link
                to={`/profile/${dataArr.id}`}
                className={`${activeLink.pathname === `/profile/${dataArr.id}`
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                Profile
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/profile/posts"
                className={`${activeLink.pathname === "/profile/posts"
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                Posts
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/profile/gallery"
                className={`${activeLink.pathname === "/profile/gallery"
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                Gallery
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/profile/todo"
                className={`${activeLink.pathname === "/profile/todo"
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                ToDo
              </Link>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
