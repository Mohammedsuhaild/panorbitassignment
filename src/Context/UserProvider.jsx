import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const userContext = createContext();
const dataArr = JSON.parse(localStorage.getItem("userData"))

const UserProvider = ({ children }) => {
const [isloading, setIsLoading] = useState(false)
const [users, setUsers] = useState([]);

const getData = async () => {
try {
setIsLoading(true)
const res = await axios.get('https://panorbit.in/api/users');
const userData = res.data;
console.log(res)
setIsLoading(false)
setUsers(userData);
} catch (error) {
console.error(error);
setIsLoading(false)
}
};

useEffect(() => {
getData();
}, []);

return (
<userContext.Provider value={{ users, getData, dataArr, isloading }}>
{children}
</userContext.Provider>
)
}

export default UserProvider;