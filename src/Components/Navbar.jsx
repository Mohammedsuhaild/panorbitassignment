
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../Context/UserProvider";


const Navbar = () => {
  
  const navigate = useNavigate();
  const { users } = useContext(userContext);
  const location = useLocation()
  const [open, setOpen] = useState(false);

  
  const handleOpenNavbar = () => {
    setOpen(!open);
  };

  const dataArr = JSON.parse(localStorage.getItem("userData"));

  const handleSignOut = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };


  return (
    <nav className="bg-white text-gray-600 py-4 flex justify-between items-center">
      <Link to="#" className="text-xl font-semibold">
        {location.pathname === `/profile/${dataArr.id}` ? "Profile" : ""}
        {location.pathname === `/profile/posts` ? "Posts" : ""}
        {location.pathname === `/profile/gallery` ? "Gallery" : ""}
        {location.pathname === `/profile/todo` ? "ToDo" : ""}
      </Link>

      <div className="flex items-center">
        <div className="mr-4">
          <img
            src={dataArr.profilepicture}
            alt={dataArr.username}
            className="rounded-full w-8 h-8"
          />
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <button
              onClick={handleOpenNavbar}
              className="flex items-center"
            >
              <span className="mr-2">{dataArr.name}</span>
            </button>

            {open ? (
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                }}
                className="absolute top-10 right-0 bg-white rounded-lg shadow-md p-4 w-[19rem] z-10"
              >
                <div className="block">
                  <img
                    src={dataArr.profilepicture}
                    className="rounded-full w-16 h-16 m-auto"
                    alt={dataArr.username}
                  />
                  <p className="text-xl font-semibold text-gray-700">
                    {dataArr.name}
                  </p>
                  <p className="text-gray-400">{dataArr.email}</p>
                </div>
                <hr />

                {users.slice(0, 3).map((user) => (
                  <li key={user.id} className=" mt-4 list-none ">
                    <div className="flex items-center pb-[5px] bg-white">
                      <img
                        src={user.profilepicture}
                        alt={user.username}
                        className="w-11 h-11 rounded-full mr-2"
                      />
                      <div className="font-medium text-gray-700">
                        {user.name}
                      </div>
                    </div>
                    <hr />
                  </li>
                ))}

                <div className="block mt-1">
                  <button
                    onClick={handleSignOut}
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-[2rem]"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
