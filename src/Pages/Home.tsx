import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box,Avatar,Text } from '@chakra-ui/react';
import "../Styles/Card.css"
import Loader from '../Components/Loader';
import { User } from '../Interface';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchUsers();
    setHasMore(true)
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`https://randomuser.me/api?results=25&page=${page}`);
      const newUsers = response.data.results;
      setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  return (
    <div className='box'>
      
      <InfiniteScroll
        dataLength={users.length}
        next={fetchUsers}
        hasMore={hasMore}
        loader={<Loader/>}
        endMessage={<p>No more users to display.</p>}
      >
        <div className='grid-conatiner'>
        {users.map((user, index) => (
          <div className='card' key={index}>
            <Text className='name'>{`${user.name.first} ${user.name.last}`}</Text>
            <Avatar size={{ base: "sm", sm: "md", md: "md" }}  src={user.picture.thumbnail} name="User thumbnail"/>
          </div>
        ))}
        </div>
       
      </InfiniteScroll>
    </div>
  );
};

export default Home;
