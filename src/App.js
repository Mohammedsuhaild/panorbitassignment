import React,{useState} from 'react';

import MainScreen from './Components/MainScreen';
import User from './Components/User';
import VerticalNav from './Components/VerticalNav';
import Navbar from './Components/Navbar';
// import UserProfile from './Components/UserProfile';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <MainScreen handleUserSelection={handleUserSelection}  />
      {/* <UserProfile/> */}
      {/* <VerticalNav/> */}
      {/* <Navbar/> */}
      <div>
        {selectedUser && <User user={selectedUser} />}
      </div>
      {/* <User/> */}
    </div>
  );
};

export default App;
