import React, { useEffect, useState,useHistory } from 'react';
import backgroundImage from './background.jpg';
const MainScreen = () => {
  const [users, setUsers] = useState([]);
  // const [user, setUser] = useState(null);
  // const [selectedUser, setSelectedUser] = useState(null);
  const history = useHistory();
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    history.push(`/user/${userId}`);
  };


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://panorbit.in/api/users.json');
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  // const handleUserClick = ({user}) => {
  //   handleUserSelection(user);
  // };
  // const handleProfileClick = async (id) => {
  //   try {
  //     const response = await fetch(`https://panorbit.in/api/users.json/users/${id}`);
  //     const data = await response.json();
  //     setUser(data.user);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };
  return (
    <div style={{
      backgroundColor:"blue",
      width: '100%',
      height: '100%',
      
    }}>

    <div style={{ boxShadow: "rgba(122, 122, 161, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px ,rgba(17, 17, 26, 0.1) 0px 24px 80px",
    border: "300px",
    padding: "10px",
    width: "500px",
    marginTop:"30px",
    borderRadius: "50px",
    position:"absolute",
    left:"30%",
  }}>
      
      <ol style={{ listStyleType: "none"}}>
      <h2 style={{textAlign:"center",color:"grey"}}>Select An account</h2>
        {users.map((user) => (
         
          <li  style={{cursor:"pointer"}} onClick={() => handleUserClick(user.id)} key={user.id}><img style={{ width: "40px",
            height: "40px",borderRadius:"50px",verticalAlign: "middle", marginRight: "10px",marginBottom:"10px,"}} src={user.profilepicture}></img>{user.name}<hr style={{color:"lightgray", height: "1px"}}></hr></li>
        ))}
      </ol>
    </div>
    {/* <div className="profile">
        {selectedUser && (
          <div>
            <img src={selectedUser.profilepicture} alt="Profile" />
            <h3>{selectedUser.name}</h3>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
          </div>
        )}
      </div> */}
      
    </div>
  )
};

export default MainScreen;
