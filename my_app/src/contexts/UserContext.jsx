import { createContext, useState } from 'react'
import SessionService from '../services/SessionStorage/SessionService'

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  // Session
  const sessionService = new SessionService()
  const data = sessionService.getSessionData()
  // State
  const [authToken, setAuthToken] = useState(data.authToken || null)
  const [user, setUser] = useState(data.user || null)
  
  return (
    <UserContext.Provider value={{ authToken, setAuthToken, user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext

/** 
 * Usage example with useContext hook: 
 * 
 * import { useContext } from 'react'
 * import UserContext from '../contexts/UserContext'
 * const { user, setUser } = useContext(UserContext)
 * 
 * Usage example with custom hook:
 * 
 * import useUserContext from  '../hooks/useUserContext'
 * const { user, setUser } = useUserContext()
 * 
 */