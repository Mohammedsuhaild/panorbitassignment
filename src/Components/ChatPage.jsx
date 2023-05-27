import { useState, useContext } from "react";
import { userContext } from "../Context/UserProvider"; 
import { BsChatRight, BsChevronDown } from "react-icons/bs";
import { Box, Flex, Icon, Text, Image } from "@chakra-ui/react"; 
const ChatPage = () => {
  const { users } = useContext(userContext); 
  const [open, setOpen] = useState(false); 

  const handleOpenChats = () => {
    setOpen(!open); 
  };

  return (
    <Flex justify="flex-end" pr="2rem"> 
      <Box
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        w="21%" 
        rounded="10px" 
      >
        <Flex
          className="text-xl text-white bg-sky-400 p-4 flex items-end justify-between gap-[2rem] rounded-t-[11px] cursor-pointer" 
          onClick={handleOpenChats} 
        >
          <Icon as={BsChatRight} className="-mr-[8rem]" />
          <Text>Chats</Text>
          <Icon as={BsChevronDown} /> 
        </Flex>
        {open ? ( 
          <Box className="p-4 h-[16rem] overflow-y-auto scrollbar-thin">
            {users?.map((user) => ( 
              <Box key={user.id}>
                <Flex gap="4" pb="[5px]">
                  <Image
                    className="w-8 h-8 rounded-full"
                    src={user.profilepicture}
                    alt={user.username}
                  />
                  <Text>{user.name}</Text>
                </Flex>
              </Box>
            ))}
          </Box>
        ) : (
          "" 
        )}
      </Box>
    </Flex>
  );
};

export default ChatPage;
