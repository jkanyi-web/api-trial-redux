/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFetchedUsers } from '../redux/users/usersSlice';

const FetchedUsers = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchedUsers());
  }, [dispatch]);

  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  if (error) {
    return <h1>Something's not quite right...</h1>;
  }

  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name.first + ' ' + user.name.last}</li>;
      })}
    </ul>
  );
};

export default FetchedUsers;
