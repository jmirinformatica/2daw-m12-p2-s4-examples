import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

/** 
 * Usage example with useContext hook: 
 * 
 * import { useContext } from 'react';
 * import UserContext from '../contexts/UserContext';
 * const { user, setUser } = useContext(UserContext);
 * 
 * Usage example with custom hook:
 * 
 * import useUserContext from  '../hooks/useUserContext';
 * const { user, setUser } = useUserContext();
 * 
 */