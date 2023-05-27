import React, { useContext } from "react";
import Chat from "../Components/ChatPage";
import Navbar from "../Components/Navbar";
import SideNavbar from "../Components/SideNavbar";
import { userContext } from "../Context/UserProvider";

const Gallery = () => {
  const { dataArr } = useContext(userContext)
  return (
    <div className="">
      <div className=" flex ">
        <div className=" w-[24%]">
          <SideNavbar />
        </div>
        <div className="py-12 px-8 w-[76%]">
          <Navbar />
          <hr />
          {!dataArr ?
            (<div><img className='w-[30rem]' style={{ margin: "auto" }} src="https://cdn.dribbble.com/users/148670/screenshots/5252136/media/e7019e9ad90430ab0e796f38c8c7baa0.gif" alt="loading" /></div>) : (

              <div className="mt-4 p-8">
                <div className="text-center font-bold text-gray-400 text-[5rem] opacity-25 p-40">
                  Coming Soon
                </div>
              </div>)}
        </div>
      </div>
      <Chat />
    </div>
  );
};

export default Gallery;
