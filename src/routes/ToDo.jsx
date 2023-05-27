import React, { useContext } from "react";
import Chat from "../Components/ChatPage";
import Navbar from "../Components/Navbar";
import SideNavbar from "../Components/SideNavbar";
import { userContext } from "../Context/UserProvider";

const ToDo = () => {
  // useContext is used to get data from a context, which is passed as an argument to useContext. Here, we are getting dataArr from the userContext.
  const { dataArr } = useContext(userContext);
  
  return (
    <div className="">
      <div className=" flex ">
        <div className=" w-[24%]">
          <SideNavbar />
        </div>
        <div className="py-12 px-8 w-[76%]">
          <Navbar />
          <hr />
          
          {/* If dataArr is falsy (undefined, null, false, 0, ""), display a loading animation, otherwise display the content. */}
          {!dataArr ? (
            <div>
              <img
                className="w-[30rem]"
                style={{ margin: "auto" }}
                src="https://cdn.dribbble.com/users/148670/screenshots/5252136/media/e7019e9ad90430ab0e796f38c8c7baa0.gif"
                alt="loading"
              />
            </div>
          ) : (
            <div className="mt-4 p-8">
              <div className="text-center font-bold text-gray-400 text-[5rem] opacity-25 p-40">
                Coming Soon
              </div>
            </div>
          )}
        </div>
      </div>
      <Chat />
    </div>
  );
};

export default ToDo;
