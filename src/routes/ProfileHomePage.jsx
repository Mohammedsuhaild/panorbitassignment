import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import axios from 'axios'; 
import Navbar from "../Components/Navbar" // import Navbar component
import SideNavbar from '../Components/SideNavbar'; // import SideNavbar component
import Chat from '../Components/ChatPage'; // import Chat component

const ProfileHomePage = () => { // create a functional component named ProfileHomePage
  const { userId } = useParams(); // use the useParams hook to get the userId parameter from the URL
  const [user, setUser] = useState(null); 

  useEffect(() => { // use the useEffect hook to perform side effects in the component
    const fetchUser = async () => { // declare an async function named fetchUser
      const res = await axios.get(`https://drab-blue-shark-robe.cyclic.app/users/${userId}`); // make a GET request to the API endpoint with the userId parameter and store the response in a variable called res
      setUser(res.data); // update the user state variable with the data from the API response
    };
    fetchUser(); // call the fetchUser function
  }, [userId]); // run the effect only when the userId parameter changes

  localStorage.setItem("userData", JSON.stringify(user)) // store the user data in the localStorage with the key "userData"
  // console.log("data" , user);
  const dataArr = JSON.parse(localStorage.getItem("userData")) // retrieve the user data from localStorage and parse it as JSON

  if (!dataArr) { // if the dataArr is falsy, render a loading spinner
    return <div>
      <img className='w-[30rem]' style={{ margin: "auto" }} src="https://cdn.dribbble.com/users/148670/screenshots/5252136/media/e7019e9ad90430ab0e796f38c8c7baa0.gif" alt="loading" /></div>;
  }


  return (  // render the component UI
    <>
      <div >
        <div className=' flex '>
          <div className=' w-[24%]'>
            <SideNavbar />
          </div>
          {dataArr && (<div className='py-12 px-8 w-[76%]'>
            <Navbar />
            <hr />
            <div className=' flex flex-warp justify-between mt-4 p-8'>
              <div className='p-4 w-[35%]'>
                <div>
                  <img className='w-52 h-52 rounded-full m-auto ' src={dataArr.profilepicture} alt={dataArr.username} />
                  <p className='text-gray-700 text-xl font-medium pt-2' >{dataArr?.name}</p>
                </div>
                <div className='leading-8  '>
                  <p className='text-gray-500 font-medium flex justify-between'>Username : <b className='text-gray-700 text-left' >{dataArr?.username}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>e-mail : <b className='text-gray-700 text-left' >{dataArr?.email}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>Phone : <b className='text-gray-700 text-left' >{dataArr?.phone}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>Website : <b className='text-gray-700 text-left' >{dataArr?.website}</b></p>
                </div>
                <hr />
                <div className='leading-10 '>
                  <p className="text-gray-500 font-medium text-center">Company</p>
                  <p className='text-gray-500 font-medium flex justify-between w-[89%]'>Name : <b className='text-gray-700' >{dataArr?.company.name}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>catchphrase : <p className='w-[60%]'><b className='text-gray-700 ' >{dataArr?.company.catchPhrase}</b></p></p>
                  <p className='text-gray-500 font-medium flex justify-between'>bs : <p className='w-[60%]'><b className='text-gray-700 ' >{dataArr?.company.bs}</b></p></p>
                </div>
              </div>
              <hr className='border border-gray-300 h-auto' />
              <div className=' w-[50%] p-4 '>
                <div className='leading-8 w-[65%] '>
                  <p className="text-gray-500 font-medium text-left">Address :</p>
                  <p className='text-gray-500 font-medium flex justify-between'>Street : <b className='text-gray-700' >{dataArr?.address.street}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>Suite : <b className='text-gray-700' >{dataArr?.address.suite}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>City : <b className='text-gray-700' >{dataArr?.address.city}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>Zipcode : <b className='text-gray-700' >{dataArr?.address.zipcode}</b></p>
                </div>
                <hr />
                <div className='pt-4'>
                  <img className='rounded-2xl' src="https://static.toiimg.com/thumb/msid-79949586,imgsize-128601,width-400,resizemode-4/79949586.jpg" alt="map" />
                  <div className='flex justify-end gap-4'>
                    <p className='text-gray-500 font-medium flex'>Lat: <p className='text-gray-700' >{dataArr?.address.geo.lat}</p></p>
                    <p className='text-gray-500 font-medium flex'>Lng: <p className='text-gray-700' >{dataArr?.address.geo.lng}</p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>)
          }
        </div>

        <Chat />
      </div>
    </>
  );
};

export default ProfileHomePage;
