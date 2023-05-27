import React, { useContext } from "react";
import { Link } from "react-router-dom";
import homePageImg from "../assets/home.png";
import LandingLoading from "../Components/LandingLoading";
import { userContext } from "../Context/UserProvider";

const LandingPage = () => {
  // Importing users and isloading from the userContext
  const { users, isloading } = useContext(userContext);

  return (
    // Landing Page Container
    <div
      className="py-28"
      style={{
        backgroundImage: `url(${homePageImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {/* Account Selection Container */}
      <div
        className="border-2 w-[38%] m-auto  rounded-[3rem] "
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
      >
        {/* Account Selection Header */}
        <div className=" bg-gray-100 rounded-t-[2.8rem]">
          <h1 className="text-xl text-zinc-600 font-semibold p-8 text-center">
            Select User Account
          </h1>
        </div>

        {/* Account Selection List */}
        {/* If the data is loading, show the landing skeleton component */}
        {/* Otherwise, render the list of users */}
        {
          isloading ? (<LandingLoading />) :

            (<div className="bg-white rounded-b-[2.8rem]">
              <div className="p-8 overflow-y-auto h-[28rem] scrollbar-thin">
                {/* Check if there are any users in the list before mapping */}
                {users?.length > 0 && // Use optional chaining to prevent errors if users is null or undefined
                  users.map((user) => (
                    <li key={user.id} className="mb-4 list-none ">
                      {/* Link to the user's profile page */}
                      <Link
                        to={`/profile/${user.id}`}
                        className="block  rounded hover:bg-gray-100 "
                      >
                        <div className="flex items-center pb-4 bg-white">
                          <img
                            src={user.profilepicture}
                            alt={user.username}
                            className="w-11 h-11 rounded-full mr-2"
                          />
                          <div className="font-medium">{user.name}</div>
                        </div>
                        <hr />
                      </Link>
                    </li>
                  ))}
              </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default LandingPage;
