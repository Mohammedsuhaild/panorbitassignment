import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      <img src={user.profilepicture} alt="Profile" />
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default User;
