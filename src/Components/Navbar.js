import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Navbar.css';

const Navbar = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://panorbit.in/api/users.json');
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="navbar">
      <div className="navbar-header">Vertical Navbar</div>
      <ul className="navbar-menu">
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
      <div className="profile">
        {selectedUser && (
          <div>
            <img src={selectedUser.profilepicture} alt="Profile" />
            <h3>{selectedUser.name}</h3>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
